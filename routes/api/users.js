const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

// POST /api/users/login
router.post('/login', usersCtrl.login)
//POST/api/users/guest
router.post('/guest', usersCtrl.createAnonymousUser)
// POST /api/users
router.post('/', usersCtrl.create)

module.exports = router
