const express = require('express');
const News = require('../model/News');
const router = express.Router();

// Endpoint to fetch all saved news
router.get('/', async (req, res) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 }); // Sort by most recent first
    res.status(200).json(news);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

module.exports = router;
