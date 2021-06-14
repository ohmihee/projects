const express = require('express')
const router = express.Router()

const userController = require('./usercontroller.js')
//const communityController = require('./communityController.js')
const mainboardController = require('./mainboardController.js')


// /admin
router.get('/',userController.login)
router.get('/login',userController.login_on)
router.post('/login',userController.login_on)
router.get('/admin_list',userController.admin_list_get)
router.post('/admin_list',userController.admin_list)
router.post('/admin_add',userController.admin_add)
router.post('/searched_data',userController.searched_data)
router.get('/admin_search',userController.admin_search_get)
router.post('/admin_search',userController.admin_search)
router.get('/user_list',userController.user_list) 
router.post('/user_list',userController.add_user)
router.get('/site_set',userController.site_set)
router.post('/site_set',userController.site_set_post)
//router.get('/search_m',userController.manager_search)
//router.post('/search_m',userController.manager_search)

//router.use('/community',communityController.report)
router.get('/community',(req,res)=>{
    //console.log(req.sessioin)

    req.session.idxx = 'idxxxx'
    //console.log(req.session.idxx,'=======tophtml')
    res.render('./admin/top.html')
})
//admin/board_make
router.get('/board_make',mainboardController.board_page)
router.post('/board_make',mainboardController.board_make)
router.post('/board_manage',mainboardController.board_manage)



module.exports = router