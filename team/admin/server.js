const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const {sequelize} = require('./models')
const cookieParser = require('cookie-parser')
const Router = require('./routes/index.js')
require('dotenv').config('env')
require('express-async-errors')

const port = process.env.PORT||3000

sequelize.sync({force:true})
.then(()=>{
    console.log('db접속 성공')
})
.catch((err)=>{
    console.log('db err',err)
})

nunjucks.configure('views',{express:app})

app.set('view engine','html')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
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

console.log('server')






app.listen(port,(req,res)=>{
    console.log(`server start port${port}`)
})