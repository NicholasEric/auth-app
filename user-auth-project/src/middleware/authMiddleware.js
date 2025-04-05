// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get the token from the "Authorization" header (format: "Bearer token")
  const token = req.header('Authorization')?.split(' ')[1];

  // If no token is provided, deny access
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret key from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the user payload (from the token) to the request object
    req.user = decoded.user;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
