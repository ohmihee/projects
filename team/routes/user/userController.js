//const e = require("express")
const { default: axios } = require("axios")
const { User } = require("../../models")
const qs =require('qs')




let login = (req,res)=>{
    
    if(req.originalUrl=='/user/login'){
        res.render('./user/login.html')
    }
}
let login_success = async (req,res)=>{
    //console.log(req.body.email)
    try{
        let resu = await User.findOne({
            idx:req.body.email
        })
        //console.log('idx======================',resu.idx)
        if(resu.idx==req.body.email&resu.psw==req.body.psw){
            console.log('succccccccccc')
            res.redirect('/')
        }else{
            res.send('<p>로그인에 실패하였습니다.</p>')
        }
            
    }catch(e){
        //console.log('error=================',e)
    }

}
let join = (req,res)=>{
    res.render('./user/join.html')
}
let join_success = async (req,res)=>{   
   // console.log(req.body)
    let {idx,psw,name,birth,gender} = req.body    
    //console.log(req.body,'zzz')
    console.log(req.body.idx,'zzzz')
    let tel = req.body.tel
        tel = tel.replace('-','').replace('-','')
        //console.log(tel)
    let created_at = new Date().toLocaleDateString()
    let img = 'img'
    let email = 'email'   

    try{
        let rst = await User.create({
            idx,psw,name,birth,gender,created_at,tel,img,email
        })        
    }catch(e){
        console.log('error',e)
    }
    res.redirect('/')
}

const kakao = {
    clientID : '6a6edcb3952747d14b2f508442194cfd',
    clientSecret : 'lVh2mUcKBbUFYoRTdynz1FAR4RwRHelA',
    redirectUri : 'http://localhost:3000/user/auth/kakao/callback'
}

let login_kakao = (req,res)=>{
    const kakaoAUthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile,account_email`
    res.redirect(kakaoAUthURL)
}

let login_kakao_callback = async(req,res)=>{
    const {session,query} = req;  //req.query를 변수 qurey에 담고
    const {code} = query;  // req.query.code를 변수 code에 넣은 것

    let token;
    try{
        token = await axios({
            // axios => promise object
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers:{
                'content-type':'application/x-www-form-urlencoded',
            },
            data:qs.stringify({
                grant_type:'authorization_code',
                client_id:kakao.clientID,
                client_secret:kakao.clientSecret,
                redirectUri:kakao.redirectUri,
                code   //:req.query.code,
            }) 
        })
    } catch(err){
        res.json(err.data)
    }
    let user
    try{
        user = await axios({
            method:'GET',
            url:'https://kapi.kakao.com/v2/user/me',
            headers:{
                Authorization: `Bearer ${token.data.access_token}`
            }
        })
    } catch (err) {
        res.json(err.data)
    }

    

   // req.session.kakao = user.data;
    /* 위에랑 같은 구문
    req.session = {
        ['kakao']:user.data,
    }
    // 다양한 로그인 방식을 이용하기 위해서는 위의 방법이 더욱 유용하다.
    */

    const authData = {
        ...token.data,
        ...user.data,
        // 깊은 복사
        // 이후에 원본의 값이 변하여도 복사시점의 값을 이용
    }
    session.authData = {
        ['kakao']:authData,
    }
    //console.log('===========================================================================================================',session);
    res.redirect('/')
}

//     const {session,query} = req
//     const {code} = query
    
//     let token;
//     try{
//         token = await axios({
//             method:'POST',
//             url:'https://kauth.kakao.com/oauth/token',
//             headers:{
//                 'content-type':'application/x-www-form-urlencoded',
//             },
//             data:qs.stringify({
//                 grant_type:'authorization_code',
//                 client_id:kakao.clientID,
//                 client_secret:kakao.clientSecret,
//                 redirectUri:kakao.redirectUri,
//                 code: code,

//             })
//         })

//     }catch(err){
//         res.json(err.data)
//     }
   
//     let user
//     try{
//         user = await axios({
//             method:'GET',
//             url:'https://kapi.kakao.com/v2/user/me',
//             headers:{
//                 Authorization:`Bearer ${token.data.access_token}`
//             }
//         })
//     }catch(err){
//         res.json(err.data)
//     }


//     const authData = {
//         ...token.data,
//         ...user.data

//     }
//     session.authData = {
//         ['kakao']:authData
//     }
//     res.redirect('/')
// }

// const authMiddleware = (req,res,next)=>{
//     const {session} = req;
//     if(session.authData==undefined){
//         res.redirect('/?msg=로그인 되어있지 않음')
//     }else{
//         next()
//     }
// }



module.exports = {
    login:login,
    join:join,
    join_success:join_success,
    login_success:login_success,
    login_kakao:login_kakao,
    login_kakao_callback:login_kakao_callback
}