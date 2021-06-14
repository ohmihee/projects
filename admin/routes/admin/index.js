const express = require('express')
const router = express.Router()

const userController = require('./usercontroller.js')

router.get('/',userController.login)
router.get('/login',userController.login_get)
router.post('/login',userController.login_post)
router.get('/admin_list',userController.admin_list)
router.post('/admin_list',userController.admin_list)
router.post('/admin_add',userController.admin_add)
router.post('/searched_data',userController.searched_data)
router.get('/admin_search',userController.admin_search_get)
router.post('/admin_search',userController.admin_search)
router.get('/user_list',userController.user_list) 
router.post('/user_list',userController.add_user)
router.get('/board_make',userController.board_manage)
router.post('/board_make',userController.board_make)
//router.get('/search_m',userController.manager_search)
//router.post('/search_m',userController.manager_search)s



module.exports = router