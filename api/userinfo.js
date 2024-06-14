const express = require("express");
const router = express.Router();
const useinfoController = require("../controllers/userinfo");
const setinfoController = require("../controllers/referral");

// Find the user info and if not save the user data
router.post("/api/v1/user", useinfoController.userFindSave);
router.post("/api/v1/update", useinfoController.userDataSave);
router.post("/api/v1/referral", setinfoController.setReferralId);

module.exports = router;