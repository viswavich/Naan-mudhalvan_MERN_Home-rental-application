const mongoose = require('mongoose');

// MongoDB URI from environment variable (loaded via dotenv or directly here)
const uri = process.env.MONGO_URI = 'mongodb+srv://Viswa:Viswa%40007@contact.rcfyd.mongodb.net/?retryWrites=true&w=majority&appName=contact';

// Check if URI is undefined
if (!uri) {
  throw new Error('MongoDB connection string is not defined');
}

// Connect to MongoDB
const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Stop the process if connection fails
  }
};

module.exports = connectDb;
