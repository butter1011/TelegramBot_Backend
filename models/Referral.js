const mongoose = require("mongoose");

const referralInfoSchema = new mongoose.Schema({
  referral_id: {
    type: String,
    required: false,
  },
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserInfo = mongoose.model("Referral", referralInfoSchema);

module.exports = UserInfo;
