let {Main,Submain} = require('../../models')



let board_page = async (req,res)=>{
    // let mainBoard = await Submain.findAll({attributes:['mainBoard']})
    // console.log(mainBoard)
    let boardres = await Submain.findAll()
    res.render('./admin/board_make.html',{boardres})
    
}

let board_make = async (req,res)=>{
    //console.log(req.body)
    let {tableName,mainBoard,subBoard,url,content,watchaut,writeaut,replyaut} = req.body
    await Submain.create({mainBoard,subBoard,content,watchaut,writeaut,replyaut})
    try{
        await Main.create({mainBoard,subBoard,watchaut,url})
    }catch(e){
        console.log(e,'---------------------err----------------')
    }
    let boardres = await Submain.findAll()

    res.render('./admin/board_make.html',{boardres})
}

let board_manage = async (req,res)=>{
    console.log(req.body.modify)
    console.log(req)
    let boardres = await Submain.findAll()
    res.render('./admin/board_make.html',{boardres})
}

module.exports = {board_page,board_make,board_manage}