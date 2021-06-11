const Sequelize = require('sequelize')

module.exports = class Adminlist extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(20),
                allowNull:false
            },
            nickname:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            psw:{
                type:Sequelize.STRING(255),
                allowNull:false,
            },
            birth:{
                type:Sequelize.DATE,
                allowNull:false,
            },
            class:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            level:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            tel:{
                allowNull:false,
                unique:true,
                type:Sequelize.INTEGER
            },
            resetDate:{
                allowNull:false,
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
            },
            startDate:{
                allowNull:false,
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
            },
            email:{
                type:Sequelize.STRING(50),
                allowNull:false 
            }
            
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'adminlist',
            tableName:'adminlist',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}