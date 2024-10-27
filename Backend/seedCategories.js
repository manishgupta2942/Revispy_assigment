require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker'); // Ensure correct import for faker
const Category = require('./models/Category'); // Adjust path if needed

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

const seedCategories = async () => {
    try {
        await Category.deleteMany({}); // Clear existing entries if needed

        // Create 100 fake categories
        const categories = Array.from({ length: 100 }, () => ({
            name: faker.commerce.department(),
        }));

        await Category.insertMany(categories);
        console.log('Database seeded with 100 categories');
    } catch (err) {
        console.error('Error seeding categories:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedCategories();

