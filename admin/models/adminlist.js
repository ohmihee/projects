const Sequelize = require('sequelize')

module.exports = class Adminlist extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(20),
                allowNull:false
            },
            idx:{
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
            courseName:{
                type:Sequelize.STRING(30),
                allowNull:true,
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
            startDate:{
                allowNull:false,
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
            },
            email:{
                type:Sequelize.STRING(50),
                allowNull:false 
            },
            img:{
                type:Sequelize.TEXT,
                allowNull:true
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