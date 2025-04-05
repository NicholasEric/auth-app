// src/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect using the connection string stored in the environment variable MONGO_URI
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    // Exit the process with failure if unable to connect
    process.exit(1);
  }
};

module.exports = connectDB;
