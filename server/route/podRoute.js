const express = require('express');
const { getPod } = require('../controller/podController');

const router = express.Router();

router.get('/', getPod);

module.exports = router;
