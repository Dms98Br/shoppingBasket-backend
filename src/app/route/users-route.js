const express = require('express')
const router = express.Router()
const controller = require('../controllers/users-controller')

router.post('/create', controller.post)

router.get('/', controller.get)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router