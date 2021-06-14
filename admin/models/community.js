//submain/category/title/contents/count/writer/img/enrollDate/file/writeaut/readaut/repelaut
const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class Community extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            subBoard:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            category:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            title:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            contents:{
                type:Sequelize.TEXT,
                allowNull:false
            },
            count:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            writer:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            img:{
                type:Sequelize.TEXT,
                allowNull:false
            },
            enrollmentDate:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('enrollmentDate')).format('YYYY-MM-DD')
                }
            },
            file:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            writeaut:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            },
            readaut:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            },
            replyaut:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            }           
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'community',
            tableName:'communitys',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}