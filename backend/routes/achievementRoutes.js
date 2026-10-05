const express = require("express");

const {
  addAchievement,
  getMyAchievements,
  getAchievementById,
  uploadCertificate,
} = require("../controllers/achievementController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("STUDENT"),
  addAchievement
);

router.get(
  "/my",
  authMiddleware,
  roleMiddleware("STUDENT"),
  getMyAchievements
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("STUDENT"),
  getAchievementById
);

router.post(
  "/:id/certificate",
  authMiddleware,
  roleMiddleware("STUDENT"),
  upload.single("certificate"),
  uploadCertificate
);

module.exports = router;