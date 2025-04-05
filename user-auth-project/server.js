// server.js

// Load environment variables from .env file
require('dotenv').config();

// Import the Express app from src/app.js
const app = require('./src/app');

// Define the port from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
