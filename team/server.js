const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
require('dotenv').config('env')
const Router = require('./routes/index')
const port = process.env.PORT||3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const session = require('express-session')
const {sequelize} = require('./models')
//const sequelize = require('/models').sequelize
const ctoken = require('./jwt')
const pwhash = require('./createHash')
const axios = require('axios')
const crypto = require('crypto')
const auth = require('./middleware/auth')

app.set('view engine','html')

sequelize.sync({force:true})
.then(()=>{
    console.log('db접속에 성공하였습니다.')
})
.catch((err)=>{
    console.log('db error',err)
})

nunjucks.configure('views',{express:app})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.static('public'))
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    }
}))

app.use('/',Router)




// app.use((req,res,next)=>{
//     const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
//     error.status = 404;
   
//     next(error)
// })

// app.use((err,req,res,next)=>{
//     res.locals.message = err.message;
//     res.locals.error = process.env.NODE_ENV !=='production'?err:{};
//     res.status(err.status||500)
//     res.render('error')
// })
// let dd = new Date().toLocaleDateString()
// console.log(dd)

app.listen(port,()=>{
    console.log(`server start port ${port}`)
})