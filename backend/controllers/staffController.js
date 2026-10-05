const db = require("../config/db");

// Staff dashboard statistics
const getDashboard = async (req, res) => {
  try {
    const [students] = await db.execute(
      `SELECT COUNT(*) AS total_students
       FROM students`
    );

    const [achievements] = await db.execute(
      `SELECT COUNT(*) AS total_achievements
       FROM achievements`
    );

    const [wins] = await db.execute(
      `SELECT COUNT(*) AS total_wins
       FROM achievements a
       JOIN positions p
         ON a.position_id = p.position_id
       WHERE p.position_name IN
       ('1st Place', '2nd Place', '3rd Place')`
    );

    const [participation] = await db.execute(
      `SELECT COUNT(*) AS total_participation
       FROM achievements a
       JOIN positions p
         ON a.position_id = p.position_id
       WHERE p.position_name = 'Participation'`
    );

    const [specialAwards] = await db.execute(
      `SELECT COUNT(*) AS total_special_awards
       FROM achievements a
       JOIN positions p
         ON a.position_id = p.position_id
       WHERE p.position_name = 'Special Award'`
    );

    const [pending] = await db.execute(
      `SELECT COUNT(*) AS pending_verification
       FROM achievements
       WHERE verification_status = 'PENDING'`
    );

    return res.status(200).json({
      success: true,
      dashboard: {
        totalStudents: Number(students[0].total_students) || 0,
        totalAchievements:
          Number(achievements[0].total_achievements) || 0,
        wins: Number(wins[0].total_wins) || 0,
        participation:
          Number(participation[0].total_participation) || 0,
        specialAwards:
          Number(specialAwards[0].total_special_awards) || 0,
        pendingVerification:
          Number(pending[0].pending_verification) || 0,
      },
    });
  } catch (error) {
    console.error("Staff dashboard error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching staff dashboard",
    });
  }
};


// Get all students
const getStudents = async (req, res) => {
  try {
    const [students] = await db.execute(
      `SELECT
        s.student_id,
        s.name,
        s.register_number,
        d.department_name,
        d.department_code,
        s.year,
        s.section,
        u.email
       FROM students s
       JOIN users u
         ON s.user_id = u.user_id
       JOIN departments d
         ON s.department_id = d.department_id
       ORDER BY s.name ASC`
    );

    return res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    console.error("Get students error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching students",
    });
  }
};


// Get all achievements for staff
const getAchievements = async (req, res) => {
  try {
    const [achievements] = await db.execute(
      `SELECT
        a.achievement_id,

        s.student_id,
        s.name AS student_name,
        s.register_number,

        d.department_name,
        d.department_code,

        s.year,
        s.section,

        u.email,

        e.event_id,
        e.event_name,
        e.organizer,
        e.event_level,
        e.mode,
        e.event_date,

        c.category_id,
        c.category_name,

        p.position_id,
        p.position_name,

        a.project_title,
        a.project_description,
        a.student_role,
        a.participation_type,

        a.verification_status,
        a.submitted_at

       FROM achievements a

       JOIN students s
         ON a.student_id = s.student_id

       JOIN users u
         ON s.user_id = u.user_id

       JOIN departments d
         ON s.department_id = d.department_id

       JOIN events e
         ON a.event_id = e.event_id

       JOIN achievement_categories c
         ON a.category_id = c.category_id

       JOIN positions p
         ON a.position_id = p.position_id

       ORDER BY a.submitted_at DESC`
    );

    return res.status(200).json({
      success: true,
      count: achievements.length,
      achievements,
    });
  } catch (error) {
    console.error("Get staff achievements error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching achievements",
    });
  }
};


// Get one student's profile and achievements
const getStudentDetails = async (req, res) => {
  try {
    const studentId = req.params.id;

    const [students] = await db.execute(
      `SELECT
        s.student_id,
        s.name,
        s.register_number,
        d.department_name,
        d.department_code,
        s.year,
        s.section,
        u.email
       FROM students s
       JOIN users u
         ON s.user_id = u.user_id
       JOIN departments d
         ON s.department_id = d.department_id
       WHERE s.student_id = ?`,
      [studentId]
    );

    if (students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const [achievements] = await db.execute(
      `SELECT
        a.achievement_id,
        e.event_name,
        e.organizer,
        e.event_level,
        e.mode,
        e.event_date,
        c.category_name,
        p.position_name,
        a.project_title,
        a.project_description,
        a.student_role,
        a.participation_type,
        a.verification_status,
        a.submitted_at

       FROM achievements a

       JOIN events e
         ON a.event_id = e.event_id

       JOIN achievement_categories c
         ON a.category_id = c.category_id

       JOIN positions p
         ON a.position_id = p.position_id

       WHERE a.student_id = ?

       ORDER BY a.submitted_at DESC`,
      [studentId]
    );

    return res.status(200).json({
      success: true,
      student: students[0],
      achievements,
      achievementCount: achievements.length,
    });
  } catch (error) {
    console.error("Get student details error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching student details",
    });
  }
};


// Staff analytics
const getAnalytics = async (req, res) => {
  try {
    // Achievements by department
    const [departmentStats] = await db.execute(
      `SELECT
        d.department_name,
        d.department_code,
        COUNT(a.achievement_id) AS achievement_count
       FROM departments d
       LEFT JOIN students s
         ON d.department_id = s.department_id
       LEFT JOIN achievements a
         ON s.student_id = a.student_id
       GROUP BY
         d.department_id,
         d.department_name,
         d.department_code
       ORDER BY achievement_count DESC`
    );

    // Achievements by category
    const [categoryStats] = await db.execute(
      `SELECT
        c.category_name,
        COUNT(a.achievement_id) AS achievement_count
       FROM achievement_categories c
       LEFT JOIN achievements a
         ON c.category_id = a.category_id
       GROUP BY
         c.category_id,
         c.category_name
       ORDER BY achievement_count DESC`
    );

    // Achievements by year
    const [yearStats] = await db.execute(
      `SELECT
        s.year,
        COUNT(a.achievement_id) AS achievement_count
       FROM students s
       LEFT JOIN achievements a
         ON s.student_id = a.student_id
       GROUP BY s.year
       ORDER BY s.year ASC`
    );

    // Achievements by position
    const [positionStats] = await db.execute(
      `SELECT
        p.position_name,
        COUNT(a.achievement_id) AS achievement_count
       FROM positions p
       LEFT JOIN achievements a
         ON p.position_id = a.position_id
       GROUP BY
         p.position_id,
         p.position_name,
         p.display_order
       ORDER BY p.display_order ASC`
    );

    return res.status(200).json({
      success: true,
      analytics: {
        byDepartment: departmentStats,
        byCategory: categoryStats,
        byYear: yearStats,
        byPosition: positionStats,
      },
    });
  } catch (error) {
    console.error("Staff analytics error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching analytics",
    });
  }
};


module.exports = {
  getDashboard,
  getStudents,
  getAchievements,
  getStudentDetails,
  getAnalytics,
};