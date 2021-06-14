const {Adminlist,User,Main} = require('../../models')
const pwHash = require('../../createHash.js')
const ctoken = require('../../jwt.js')

let login = (req,res)=>{
    res.render('./admin/main.html')
}

let login_get = (req,res)=>{
    res.redirect('/admin/admin_list')
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


let searched_data = async (req,res)=>{
    if(req.body.delete=='삭제'){
        await Adminlist.destroy({
            where:{
                idx:req.body.Idx
            }
        })
        res.send('해당 관리자가 삭제되었습니다.')
    }else{
        res.send('수정 부분 코드 짜기')//===================================
    }
}

let admin_search_get = (req,res)=>{
    res.redirect('/admin/admin_list')
}

let admin_search = async (req,res)=>{
    try{
        if(req.body.search_condition_m=="name"){
            let resu = await Adminlist.findOne({
                where:{
                    name:req.body.value
                }
            })
            let date = resu.startDate
            let getDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
            res.render('./admin/admin_list.html',{resu,getDate})
            console.log('resu=======================',resu)
        }else if(req.body.search_condition_m=="class_name"){
            let resu = await Adminlist.findOne({
                where:{
                    courseName:req.body.value
                }
            })
            let date = resu.startDate
            let getDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
            res.render('./admin/admin_list.html',{resu,getDate})            
        }
    }catch(e){
        res.send('해당하는 사용자가 존재하지 않습니다.')
    }
}

let user_list = async (req,res)=>{
    let resu = await User.findAll()
    res.render('./admin/user_list.html',{resu})
}

let add_user = async (req,res)=>{
    console.log(req.body)
    try{
        let {userName,userIdx,userPsw,courseName,paycheck,userBirth,created_at,userTel,userAddress,employmentStatus,portfolio,userEtc,userImg} = req.body
        await User.create({userName,userIdx,userPsw,courseName,paycheck,userBirth,created_at,userTel,userAddress,employmentStatus,portfolio,userEtc,userImg})
        // redirect로 db 값 전달하는 방법
        res.redirect('/admin/user_list')
    }catch(e){
        res.send('동일한 아이디가 이미 존재합니다.')
        console.log(e,'===============================')
    }
       
}

let board_manage = (req,res)=>{
    res.render('./admin/board_make.html')
}

let board_make = async (req,res)=>{
    console.log(req)
    let main ="a"
    let subBoard ="a"
    let watchaut = 0
    let url = "a" 
    await Main.create({main:'a',subBoard:'a',watchaut:1,url:'a'})
    res.render('./admin/board_make.html')
}
module.exports = {login,login_post,admin_list,admin_add,searched_data,admin_search,user_list,add_user,board_manage,board_make,login_get,admin_search_get}

// 질문
// 수정클릭시 update 방법
// 가입일 포멧에 맞춰서 넣는 것
// redirect로 db 값 전달하는 방법
