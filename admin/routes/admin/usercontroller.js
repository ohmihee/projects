const pwhash = require('../../createHash.js')

let login = (req,res)=>{
    res.render('./admin/main.html')
}
let login_post = (req,res)=>{
    console.log('req bodyyyyyyyyy',req.body)
    let hashedpw = pwhash(req.body.psw)
    console.log(hashedpw)
    res.render('./admin/main.html')
}

let manager_search = (req,res)=>{
    res.render('./admin/search.html')
    let 
}

module.exports = {login,login_post,manager_search}