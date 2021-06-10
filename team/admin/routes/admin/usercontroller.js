const {User} = require('../../models')

let login = (req,res)=>{
    res.render('admin.html')
}

let login_suc = (req,res)=>{
    res.render('admin.html')
}

module.exports = {login,login_suc}