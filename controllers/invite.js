const ReferralInfo = require("../models/Inviter");
const UserInfo = require("../models/User");

// Generate the invite url by using the user_id
exports.setInviteUser = async (req, res) => {
  try {
    // Get user_id
    const data = req.body;
    const user_id = data.data.user_id;
    const inviter_id = data.data.inviter_id;

    console.log(`inviter_id------------->${inviter_id}`);
    console.log(`user_id------------->${user_id}`);

    // find the user
    const user = await ReferralInfo.findOne({ user_id: user_id });
    console.log(`User InviterId------>${user.inviter_id}`);

    if (user && user.inviter_id == "") {
      user.inviter_id = inviter_id;
      const response = await user.save();
      console.log("Inviter set correctly.");
      
      if (response) {
        const newUser = await UserInfo.findOne({ user_id: user_id });
        const inviterUser = await UserInfo.findOne({ user_id: inviter_id });

        // add the bonus point for inviting event
        newUser.GlobalBitcoins = newUser.GlobalBitcoins + 15000;
        newUser.save();
        inviterUser.GlobalBitcoins = inviterUser.GlobalBitcoins + 30000;
        inviterUser.save();

        return res.status(200).json({
            message: "Inviter set correctly.",
        });
      } 
    }

    if(user.inviter_id){
        return res.status(201).json({
            message: "User already has an inviter",
        });
    }

    return res.status(404).json({
      message: "User not found",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
