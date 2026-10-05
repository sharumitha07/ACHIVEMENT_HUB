const db = require("../config/db");

// Add a new achievement
const addAchievement = async (req, res) => {
  try {
    const {
      event_name,
      organizer,
      event_level,
      mode,
      event_date,
      category_id,
      position_id,
      project_title,
      project_description,
      student_role,
      participation_type,
    } = req.body;

    if (
      !event_name ||
      !event_level ||
      !category_id ||
      !position_id
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Event name, event level, category and achievement position are required",
      });
    }

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

    const [eventResult] = await db.execute(
      `INSERT INTO events
       (
         event_name,
         organizer,
         event_level,
         mode,
         event_date
       )
       VALUES (?, ?, ?, ?, ?)`,
      [
        event_name,
        organizer || null,
        event_level,
        mode || "OFFLINE",
        event_date || null,
      ]
    );

    const eventId = eventResult.insertId;

    const [achievementResult] = await db.execute(
      `INSERT INTO achievements
       (
         student_id,
         event_id,
         category_id,
         position_id,
         project_title,
         project_description,
         student_role,
         participation_type
       )
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        studentId,
        eventId,
        category_id,
        position_id,
        project_title || null,
        project_description || null,
        student_role || null,
        participation_type || "INDIVIDUAL",
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Achievement added successfully",
      achievement_id: achievementResult.insertId,
    });
  } catch (error) {
    console.error("Add achievement error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while adding achievement",
    });
  }
};


// Get all achievements of the logged-in student
const getMyAchievements = async (req, res) => {
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
      count: achievements.length,
      achievements,
    });
  } catch (error) {
    console.error("Get my achievements error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching achievements",
    });
  }
};


// Get one achievement of the logged-in student
const getAchievementById = async (req, res) => {
  try {
    const achievementId = req.params.id;

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

    const [achievements] = await db.execute(
      `SELECT
        a.achievement_id,

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
        a.verification_remarks,
        a.submitted_at

       FROM achievements a

       JOIN events e
         ON a.event_id = e.event_id

       JOIN achievement_categories c
         ON a.category_id = c.category_id

       JOIN positions p
         ON a.position_id = p.position_id

       WHERE a.achievement_id = ?
       AND a.student_id = ?`,
      [achievementId, studentId]
    );

    if (achievements.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      });
    }

    const [certificates] = await db.execute(
      `SELECT
        certificate_id,
        file_name,
        file_path,
        uploaded_at
       FROM certificates
       WHERE achievement_id = ?
       ORDER BY uploaded_at DESC`,
      [achievementId]
    );

    return res.status(200).json({
      success: true,
      achievement: achievements[0],
      certificates,
    });
  } catch (error) {
    console.error("Get achievement by ID error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching achievement",
    });
  }
};


// Upload certificate for an achievement
const uploadCertificate = async (req, res) => {
  try {
    const achievementId = req.params.id;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Certificate file is required",
      });
    }

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

    const [achievements] = await db.execute(
      `SELECT achievement_id
       FROM achievements
       WHERE achievement_id = ?
       AND student_id = ?`,
      [achievementId, studentId]
    );

    if (achievements.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      });
    }

    const [result] = await db.execute(
      `INSERT INTO certificates
       (
         achievement_id,
         file_name,
         file_path
       )
       VALUES (?, ?, ?)`,
      [
        achievementId,
        req.file.originalname,
        req.file.path,
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Certificate uploaded successfully",
      certificate_id: result.insertId,
      file_name: req.file.originalname,
    });
  } catch (error) {
    console.error("Upload certificate error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while uploading certificate",
    });
  }
};


module.exports = {
  addAchievement,
  getMyAchievements,
  getAchievementById,
  uploadCertificate,
};