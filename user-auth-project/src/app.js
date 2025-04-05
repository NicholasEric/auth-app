// src/app.js

const express = require('express');
const cors = require('cors');
const app = express();

// Import the database connection function
const connectDB = require('./config/db.js');

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON payloads
app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Import authentication routes
const authRoutes = require('./routes/auth.js');

// Use the auth routes for any requests to /api/auth
app.use('/api/auth', authRoutes);

// Export the app for use in server.js
module.exports = app;
