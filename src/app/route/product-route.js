const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/create', controller.post)

router.get('/', controller.get)
module.exports = router