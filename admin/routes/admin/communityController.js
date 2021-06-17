const {Submain,Community} = require('../../models')

let report_page = async (req,res)=>{
    let subBoard = await Submain.findAll({attributes:['subBoard']})
    let communityres = await Community.findAll()
    console.log(communityres)
    res.render('./admin/community.html',{subBoard})
}

let sub_board_search = async (req,res)=>{
    let idid = req.query.id
    let ididx = req.query.idx
    //console.log(idid)
    switch (idid){
        case idid:
            let subBoard = await Submain.findAll({
                where:{
                    mainBoard:ididx
                }
            })
            let noticeres = await Community.findAll({
                where:{
                    subBoard:idid
                }
            })
            //res.send(idid)
            console.log(subBoard,'=============subBoard')
            res.render('./admin/top.html',{subBoard,noticeres})
            break;
        default:
            res.send('그 이외의 값');
            break;
    }
}

let make_contents = async (req,res)=>{
    let writer = 'aa'
    console.log(req.body)
    console.log(req.body.mainBoard)
    let {mainBoard,file,subBoard,title,contents,img,writeaut,readaut,replyaut,count}= req.body
    await Community.create({mainBoard,subBoard,title,contents,count,writer,img,file,writeaut,readaut,replyaut})
    // 같은 실수 반복한 것 -> db에 data를 넣어줄때는 {}안에 넣어주어야 한다.
    await
    res.redirect('/admin/mainBoard_category?idx=커뮤니티')
}

let write = (req,res)=>{
    
    res.render('./admin/community_write.html')
}

module.exports = {report_page,sub_board_search,make_contents,write}