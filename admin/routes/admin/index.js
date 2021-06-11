const express = require('express')
const router = express.Router()

const userController = require('./usercontroller.js')

router.get('/',userController.login)
router.post('/login',userController.login_post)
router.get('/search_m',userController.manager_search)



module.exports = router