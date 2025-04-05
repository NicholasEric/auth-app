// src/routes/auth.js

const express = require('express');
const router = express.Router();

// Import the auth controller functions
const { registerUser, loginUser, getUser } = require('../controllers/authController');

const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration (POST /api/auth/register)
router.post('/register', registerUser);

// Route for user login (POST /api/auth/login)
router.post('/login', loginUser);

router.get('/user', authMiddleware, getUser);


module.exports = router;
