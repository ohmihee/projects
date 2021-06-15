let {Main,Submain} = require('../../models')



let board_page = async (req,res)=>{
    let mainBoard = await Submain.findAll({attributes:['mainBoard']})
    console.log(mainBoard)
    let boardres = await Submain.findAll()
    res.render('./admin/board_make.html',{boardres})
}

let board_make = async (req,res)=>{
    //console.log(req.body)
    let {tableName,mainBoard,subBoard,url,contentType,watchaut,writeaut,replyaut} = req.body
    await Submain.create({mainBoard,subBoard,contentType,watchaut,writeaut,replyaut})
    try{
        await Main.create({mainBoard,subBoard,watchaut,url})
    }catch(e){
        console.log(e,'---------------------err----------------')
    }
    let boardres = await Submain.findAll()

    res.render('./admin/board_make.html',{boardres})
}



let board_manage = async (req,res)=>{
    console.log(req.body)
    
    let boardres = await Submain.findAll()
    res.render('./admin/board_make.html',{boardres})
    if(req.body.modify=="수정"){
        console.log('수정')
    }else if(req.body.remove=="삭제"){
        console.log('삭제===========boardpage더 해야함')
    }
}


module.exports = {board_page,board_make,board_manage}