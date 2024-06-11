const express = require("express");
const router = express.Router();
const useinfoController = require("../controllers/userinfo");

// Find the user info and if not save the user data
router.post("/api/v1/user", useinfoController.userFindSave);

module.exports = router;