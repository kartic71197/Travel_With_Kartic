const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
           
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; 
    }
};

module.exports = connectDB;
