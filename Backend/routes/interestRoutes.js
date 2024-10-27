const express = require('express');
const router = express.Router();
const UserInterest = require('../models/UserInterest');
const { authMiddleware } = require('../middleware/authMiddleware');

// Save selected categories for the user
router.post('/', authMiddleware, async (req, res) => {
    const userId = req.userId; // Extracted from auth middleware
    const { categoryIds } = req.body;

    try {
        let userInterest = await UserInterest.findOne({ userId });

        // If the user already has interests, update them; otherwise, create new
        if (userInterest) {
            userInterest.categories = categoryIds;
        } else {
            userInterest = new UserInterest({
                userId,
                categories: categoryIds
            });
        }

        await userInterest.save();
        res.status(200).json({ message: 'Interests saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save interests' });
    }
});

// Retrieve selected categories for the user
router.get('/', authMiddleware, async (req, res) => {
    const userId = req.userId;

    try {
        const userInterest = await UserInterest.findOne({ userId }).populate('categories');
        if (!userInterest) {
            return res.status(404).json({ error: 'No interests found' });
        }
        res.status(200).json(userInterest.categories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve interests' });
    }
});

module.exports = router;
