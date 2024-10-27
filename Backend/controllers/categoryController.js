const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
    const { page = 1, limit = 6 } = req.query;
    try {
        const categories = await Category.find()
            .limit(limit * 1)
            .skip((page - 1) * limit);
        res.json(categories);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
