const express = require('express')
const router = express.Router()

const userController = require('./usercontroller.js')

router.get('/',userController.login)
router.post('/login',userController.login_post)
router.get('/admin_list',userController.admin_list)
router.post('/admin_list',userController.admin_list)
router.post('/admin_add',userController.admin_add)
router.post('/searched_data',userController.searched_data)
//router.get('/search_m',userController.manager_search)
//router.post('/search_m',userController.manager_search)s



module.exports = router