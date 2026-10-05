const db = require("../config/db");

// Get student profile
const getProfile = async (req, res) => {
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
       JOIN users u ON s.user_id = u.user_id
       JOIN departments d ON s.department_id = d.department_id
       WHERE s.user_id = ?`,
      [req.user.user_id]
    );

    if (students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      profile: students[0],
    });
  } catch (error) {
    console.error("Get student profile error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching student profile",
    });
  }
};

// Get student dashboard statistics
const getDashboard = async (req, res) => {
  try {
    const [students] = await db.execute(
      `SELECT student_id
       FROM students
       WHERE user_id = ?`,
      [req.user.user_id]
    );

    if (students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student profile not found",
      });
    }

    const studentId = students[0].student_id;

    const [stats] = await db.execute(
      `SELECT
        COUNT(*) AS total_achievements,

        SUM(
          CASE
            WHEN p.position_name IN ('1st Place', '2nd Place', '3rd Place')
            THEN 1
            ELSE 0
          END
        ) AS wins,

        SUM(
          CASE
            WHEN p.position_name = 'Participation'
            THEN 1
            ELSE 0
          END
        ) AS participation,

        SUM(
          CASE
            WHEN p.position_name = 'Special Award'
            THEN 1
            ELSE 0
          END
        ) AS special_awards

       FROM achievements a
       JOIN positions p
         ON a.position_id = p.position_id
       WHERE a.student_id = ?`,
      [studentId]
    );

    const dashboard = stats[0];

    return res.status(200).json({
      success: true,
      dashboard: {
        totalAchievements: Number(dashboard.total_achievements) || 0,
        wins: Number(dashboard.wins) || 0,
        participation: Number(dashboard.participation) || 0,
        specialAwards: Number(dashboard.special_awards) || 0,
      },
    });
  } catch (error) {
    console.error("Get student dashboard error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching dashboard",
    });
  }
};

module.exports = {
  getProfile,
  getDashboard,
};