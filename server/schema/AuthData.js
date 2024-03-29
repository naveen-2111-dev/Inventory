const mongoose = require("mongoose");

const AuthData = new mongoose.Schema({
  name: String,
  password: String,
  phone: String,
  email: String,
});

const Auth = mongoose.model("AuthData", AuthData);

module.exports = Auth;