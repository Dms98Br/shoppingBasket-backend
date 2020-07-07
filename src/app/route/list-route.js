const express = require('express')
const router = express.Router()
const list = require('../controllers/list-controller')

router.post('/create', list.post)

router.get('/', list.get)

router.put('/:id', list.update)

router.delete('/:id', list.delete)

module.exports = router