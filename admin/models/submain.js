const Sequelize = require('sequelize')

module.exports = class Submain extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            mainBoard:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            subBoard:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            contentType:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            resetDate:{
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
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
            underscored:false,
            modelName:'submain',
            tableName:'submains',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}