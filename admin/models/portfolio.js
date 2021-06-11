const Sequelize = require('sequelize')

module.exports = class Portfolio extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userName:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            title:{
                type:Sequelize.STRING(40),
                allowNull:false,
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
            img:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            watchaut:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            },
            writeaut:{
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
            modelName:'portfolio',
            tableName:'portfolios',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
            
        })
    }
}