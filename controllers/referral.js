const UserInfo = require("../models/User");
const ReferralInfo = require("../models/Referral");

// UserFindSave if not user, create it
exports.setReferralId = async (req, res) => {
  try {
    // Get user_id & referral_id
    const { user_id, referral_id } = req.body;

    const user = await UserInfo.findOne({ user_id: user_id });
    const referral_user = await UserInfo.findOne({ user_id: referral_id });

    if (!user && !referral_user && user.referral_state === false) {
      // Create new Referral
      const newData = new ReferralInfo({
        user_id: user_id,
        referral_id: referral_id,
        referral_state: true,
      });

      await newData.save(); // Save the Referral

      res.status(200).json({
        newData,
      });
    } else {
      res.error();
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
