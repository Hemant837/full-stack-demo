const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth-controller");

router.post("/auth", authController.userLogin);

router.post("/signup", authController.userSignup);

router.get("/profile-data/:userId", authController.userProfileData);

module.exports = router;
