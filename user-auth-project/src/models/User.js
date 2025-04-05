// src/models/User.js

const mongoose = require('mongoose');

// Define the User schema with fields and options
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true,   // Email must be unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Export the model so it can be used elsewhere in the app
module.exports = mongoose.model('User', UserSchema);
