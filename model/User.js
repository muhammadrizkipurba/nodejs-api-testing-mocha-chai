const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserInfo", userSchema);
