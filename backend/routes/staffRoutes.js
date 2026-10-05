const express = require("express");

const staffController = require("../controllers/staffController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Staff dashboard
router.get(
  "/dashboard",
  authMiddleware,
  roleMiddleware("STAFF", "ADMIN"),
  staffController.getDashboard
);

// Get all students
router.get(
  "/students",
  authMiddleware,
  roleMiddleware("STAFF", "ADMIN"),
  staffController.getStudents
);

// Get all achievements
router.get(
  "/achievements",
  authMiddleware,
  roleMiddleware("STAFF", "ADMIN"),
  staffController.getAchievements
);

// Staff analytics
router.get(
  "/analytics",
  authMiddleware,
  roleMiddleware("STAFF", "ADMIN"),
  staffController.getAnalytics
);

// Get one student's details
router.get(
  "/students/:id",
  authMiddleware,
  roleMiddleware("STAFF", "ADMIN"),
  staffController.getStudentDetails
);

module.exports = router;