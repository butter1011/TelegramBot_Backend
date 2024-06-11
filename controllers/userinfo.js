const UserInfo = require("../models/User");

// getGiftcardTable
exports.userFindSave = async (req, res) => {
  try {
    // Get user_id
    const user_id = req.body.user_id;
    const user = await UserInfo.find({ user_id: user_id });

    if (user.length === 0) {
      console.log("user not found");

      // Create new user
      const newUser = new UserInfo({
        user_id: user_id,
      });

      await newUser.save();
      res.status(200).json({
        newUser,
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(401).json(error);
  }
};