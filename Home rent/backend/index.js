const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/connect"); // Path to your connect.js
const path = require("path");

const app = express();

// Load environment variables from the .env file
dotenv.config();

// Middleware setup
app.use(express.json());
app.use(cors());

// Static file serving (uploads folder)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/api/user', require('./routes/userRoutes.js'));
app.use('/api/admin', require('./routes/adminRoutes.js'));
app.use('/api/owner', require('./routes/ownerRoutes.js'));

// Retrieve MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI; // Retrieve from .env file
const PORT = process.env.PORT || 8000;  // Default port is 8000

// Check if MONGO_URI is undefined
if (!MONGO_URI) {
  console.error("MongoDB URI is not defined in the .env file.");
  process.exit(1);  // Stop the application if no MongoDB URI is found
}

// Connect to MongoDB database
connectDb();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
