const express = require("express");

const {
  getProfile,
  getDashboard,
} = require("../controllers/studentController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Student profile
router.get(
  "/profile",
  authMiddleware,
  roleMiddleware("STUDENT"),
  getProfile
);

// Student dashboard
router.get(
  "/dashboard",
  authMiddleware,
  roleMiddleware("STUDENT"),
  getDashboard
);

module.exports = router;