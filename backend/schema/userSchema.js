const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that email addresses are unique
    trim: true,   // Removes extra whitespace from the beginning and end
    lowercase: true, // Converts email to lowercase
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length (adjust as needed)
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
