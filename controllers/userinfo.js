const UserInfo = require("../models/User");
const ReferralInfo = require("../models/Referral");

// UserFindSave if not user, create it
exports.userFindSave = async (req, res) => {
  try {
    // Get user_id
    const user_id = req.body.user_id;
    const user = await UserInfo.findOne({ user_id: user_id });

    if (!user) {
      // Create new user
      const newUser = new UserInfo({
        user_id: user_id,
      });

      await newUser.save(); // Save the new user

      // Create new Referral
      const newReferral = new ReferralInfo({
        user_id: user_id,
      });

      await newReferral.save(); // Save the Referral
      
      res.status(200).json({
        newUser,
      });
    } else {
      res.status(200).json({
        user,
      });
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

// UserData Save
exports.userDataSave = async (req, res) => {
  try {
    const data = req.body;
    const userData = JSON.parse(data.data);

    const user = await UserInfo.findOne({ user_id: userData.user_id });
    if (user) {
      user.GlobalBitcoins = userData.GlobalBitcoins;

      user.ClickValueBitcoin = userData.ClickValueBitcoin;
      user.ClickSeconds = userData.ClickSeconds;

      user.BitcoinsPS = userData.BitcoinsPS;
      user.BitcoinPointsMultiply = userData.BitcoinPointsMultiply;

      user.GameProgress = userData.GameProgress;

      user.B1Value = userData.B1Value;
      user.B2Value = userData.B2Value;
      user.B3Value = userData.B3Value;
      user.B4Value = userData.B4Value;
      user.B5Value = userData.B5Value;

      user.B1level = userData.B1level;
      user.B2level = userData.B2level;
      user.B3level = userData.B3level;
      user.B4level = userData.B4level;
      user.B5level = userData.B5level;

      user.B1Cost = userData.B1Cost;
      user.B2Cost = userData.B2Cost;
      user.B3Cost = userData.B3Cost;
      user.B4Cost = userData.B4Cost;
      user.B5Cost = userData.B5Cost;

      user.B1bitcoinBoostPS = userData.B1bitcoinBoostPS;
      user.B2bitcoinBoostPS = userData.B2bitcoinBoostPS;
      user.B3bitcoinBoostPS = userData.B3bitcoinBoostPS;
      user.B4bitcoinBoostPS = userData.B4bitcoinBoostPS;
      user.B5bitcoinBoostPS = userData.B5bitcoinBoostPS;

      user.Tutorial = userData.Tutorial;
      const res = await user.save();
      console.log("OK");
    }
    res.status(200).json("OK");
  } catch (error) {
    res.status(401).json(error);
  }
};
