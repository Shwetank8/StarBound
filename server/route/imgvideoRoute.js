const express = require('express');
const { searchImages } = require('../controller/imgvideoController');

const router = express.Router();

router.get('/search/:query', searchImages);

module.exports = router;
