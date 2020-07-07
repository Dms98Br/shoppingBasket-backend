const express = require('express')
const router = express.Router()
const users = require('../controllers/users-controller')

router.post('/create', users.post)

router.get('/', users.get)

router.put('/:id', users.update)

router.delete('/:id', users.delete)

module.exports = router