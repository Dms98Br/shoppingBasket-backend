const express = require('express');
const router = express.Router();
const product = require('../controllers/product-controller');

router.post('/create', product.post)
router.get('/', product.get)
router.get('/:id', product.getById)
router.put('/:id', product.update)
router.delete('/:id', product.delete)

module.exports = router