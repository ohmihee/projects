const express = require('express')
const { route } = require('./user')
const router = express.Router()
const userRouter = require('./user/index.js')
const {user, sequelize} = require('../models')

router.use('/user',userRouter)
router.get('/',(req,res)=>{
    let query = `select * from users`
    sequelize.query
    //console.log(req)
    res.render('index.html')
})


module.exports = router

// 참고 https://alencion.tistory.com/48