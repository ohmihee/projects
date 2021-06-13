const {Adminlist} = require('../../models')
const pwHash = require('../../createHash.js')
const ctoken = require('../../jwt.js')

let login = (req,res)=>{
    res.render('./admin/main.html')
}
let login_post = async (req,res)=>{
    let idxx = req.body.idx
    let psww = req.body.psw
    let hashedpsw = pwHash(psww) 
    try{
        let resu = await Adminlist.findOne({
            where:{
                idx:idxx,
                psw:hashedpsw
            }
        })
        let token = ctoken(idxx)
        res.cookie('AccessToken',token,{})
        req.session.uid = {["local"]:resu.idx}
        let date = resu.startDate
        let getDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        
        res.render('./admin/admin_list',{resu,getDate})
    }catch(e){    
        console.log(e)
        res.send('해당하는 사용자가 존재하지 않습니다.')

    }
}

let admin_list =  (req,res)=>{
    res.render('./admin/admin_list.html')
}   

let admin_add = async (req,res)=>{
    let {name,idx,psw,birth,courseName,level,tel,startDate,email,img} = req.body
    psw = pwHash(psw)

    await Adminlist.create({name,idx,psw,birth,courseName,level,tel,startDate,email,img})
    
    res.redirect('/admin/admin_list')
}

let searched_data = (req,res)=>{
    console.log(req)
    res.send('post 확인중')
}

module.exports = {login,login_post,admin_list,admin_add,searched_data}