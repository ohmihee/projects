const {Submain} = require('../../models')

let report_page = async (req,res)=>{
    let subBoard = await Submain.findAll({attributes:['subBoard']})
    res.render('./admin/top.html',{subBoard})
}

let sub_board_search = (req,res)=>{
    console.log(req.query.id,'=sub_board_search 부분===============aa')
    let idid = req.query.id
    switch (idid){
        case '공지사항':
            res.send(idid);
            break;
        case '수강후기':
            res.send(idid);
            break;
        case 'k이야기':
            res.send(idid);
            break;
        case '유용정보':
            res.send(idid);
            break;
        case '교수칼럼':
            res.send(idid)
            break;
        default:
            res.send('그 이외의 값');
            break
    }
}
module.exports = {report_page,sub_board_search}