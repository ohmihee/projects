const express = require('express')
const router = express.Router()
const userRouter = require('./usersrouter.js')
const placesRouter = require('./placesrouter.js')
//const userController = require('./usercontroller.js')

// router.get('/',userController.login)
// router.get('/users/:userId/places',userController.login_suc)
app.use('./users',userRouter)
app.use('/user/userId/places',placesRouter)


module.exports = router