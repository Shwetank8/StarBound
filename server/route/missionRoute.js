const express = require('express');
const { getMissions } = require('../controller/missionController');
const router = express.Router();

router.get('/', getMissions);

module.exports = router;
