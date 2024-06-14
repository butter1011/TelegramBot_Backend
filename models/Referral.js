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
  referral_state: {
    type: Boolean,
    required: false,
    default: false,
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

const ReferralInfo = mongoose.model("Referral", referralInfoSchema);

module.exports = ReferralInfo;
