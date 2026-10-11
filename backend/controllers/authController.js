
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const db = require("../config/db");

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Student Sign-Up
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail.endsWith("@rajalakshmi.edu.in")) {
      return res.status(400).json({
        success: false,
        message: "Please use your official REC email",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    const [existingUsers] = await db.execute(
      "SELECT user_id FROM users WHERE email = ?",
      [cleanEmail]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await db.execute(
      `INSERT INTO users (email, password_hash, role)
       VALUES (?, ?, 'STUDENT')`,
      [cleanEmail, passwordHash]
    );

    return res.status(201).json({
      success: true,
      message: "Account created successfully. Please sign in.",
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    console.error("Signup error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error during registration",
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const [users] = await db.execute(
      `SELECT user_id, email, password_hash, role
       FROM users
       WHERE email = ?`,
      [cleanEmail]
    );

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = users[0];

    if (!user.password_hash) {
      return res.status(401).json({
        success: false,
        message: "Password login is not configured for this account",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

// Google Sign-In
const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        success: false,
        message: "Google credential is required",
      });
    }

    if (!process.env.GOOGLE_CLIENT_ID) {
      return res.status(500).json({
        success: false,
        message: "Google Sign-In is not configured on the server",
      });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email || !payload.email_verified) {
      return res.status(401).json({
        success: false,
        message: "Google account email could not be verified",
      });
    }

    const email = payload.email.toLowerCase();

    if (!email.endsWith("@rajalakshmi.edu.in")) {
      return res.status(403).json({
        success: false,
        message: "Please sign in using your official REC email",
      });
    }

    const [users] = await db.execute(
      `SELECT user_id, email, role
       FROM users
       WHERE email = ?`,
      [email]
    );

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Account not found. Please complete account registration.",
      });
    }

    const user = users[0];

    const token = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Google login successful",
      token,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Google login error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Google Sign-In failed. Please try again.",
    });
  }
};

// Get Current User
const me = async (req, res) => {
  try {
    const [users] = await db.execute(
      `SELECT user_id, email, role
       FROM users
       WHERE user_id = ?`,
      [req.user.user_id]
    );

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: users[0].user_id,
        email: users[0].email,
        role: users[0].role,
      },
    });
  } catch (error) {
    console.error("Get current user error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Export all controller functions
module.exports = {
  signup,
  login,
  googleLogin,
  me,
};
