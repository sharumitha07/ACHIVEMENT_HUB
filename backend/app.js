require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const achievementRoutes = require("./routes/achievementRoutes");
const staffRoutes = require("./routes/staffRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Achievement Hub API is running",
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Student routes
app.use("/api/student", studentRoutes);

// Achievement routes
app.use("/api/achievements", achievementRoutes);

// Staff routes
app.use("/api/staff", staffRoutes);

module.exports = app;