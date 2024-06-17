const mongoose = require("mongoose");

const inviterInfoSchema = new mongoose.Schema({
  inviter_id: {
    type: String,
    required: false,
    default: "",
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

const InviterInfo = mongoose.model("Inviter", inviterInfoSchema);

module.exports = InviterInfo;
