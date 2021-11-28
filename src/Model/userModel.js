const mongoose = require("mongoose");

//registration form schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
});

//creating a collection
const User = new mongoose.model("User", userSchema);

module.exports = User;
