const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  email: { type: String, unique: true },
  password: String,
  company: String,
  isAgency: String,
});

module.exports = mongoose.model("User", userSchema);
