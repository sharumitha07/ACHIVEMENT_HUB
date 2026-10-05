const express = require("express");

const {
  login,
  me,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Login
router.post("/login", login);

// Get currently logged-in user
router.get("/me", authMiddleware, me);

module.exports = router;