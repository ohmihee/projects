const express = require('express')
const { route } = require('./user')
const router = express.Router()
const userRouter = require('./user/index.js')

router.use('/user',userRouter)
router.get('/',(req,res)=>{
    
    //console.log(req)
    res.render('index.html')
})


module.exports = router