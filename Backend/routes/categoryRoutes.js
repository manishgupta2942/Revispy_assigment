const express = require('express');
const router = express.Router();
const { getCategories } = require('../controllers/categoryController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getCategories);

module.exports = router;
