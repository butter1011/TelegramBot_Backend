const mongoose = require("mongoose");

const referralInfoSchema = new mongoose.Schema({
  referral_id_1: {
    type: String,
    required: false,
  },
  referral_id_2: {
    type: String,
    required: false,
  },
  referral_id_3: {
    type: String,
    required: false,
  },
  referral_id_4: {
    type: String,
    required: false,
  },
  referral_id_5: {
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
