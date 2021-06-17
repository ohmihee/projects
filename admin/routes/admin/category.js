const {Submain, Adminlist} = require('../../models')

let index = async (req,res)=>{
    
    let idxx = req.query.idx
    switch (idxx){
        case 'administrator':
                let resu  = await Adminlist.findAll()
                res.render('./admin/admin_list.html',{resu})
            break   
        case `${idxx}`:
                subBoard = await Submain.findAll({
                where:{
                    mainBoard:`${idxx}`
                }
            })
            res.render('./admin/top.html',{subBoard})
            break;
    }
}

module.exports = {index}