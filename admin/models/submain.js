const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class Submain extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            mainBoard:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            subBoard:{
                type:Sequelize.STRING(30),
                allowNull:false,
                unique:true
                
            },
            contentType:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            resetDate:{
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('resetDate')).format('YYYY-MM-DD')
                }
            },
            watchaut:{
                type:Sequelize.BOOLEAN,
                defaultValue:0,
                allowNull:false
            },
            writeaut:{
                type:Sequelize.BOOLEAN,
                defaultValue:0,
                allowNull:false
            },
            replyaut:{
                type:Sequelize.BOOLEAN,
                defaultValue:0,
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Submain',
            tableName:'submains',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Submain.belongsTo(db.Main,{foreignKey:'mainBoard',sourceKey:'mainBoard'})
        //db.Submain.hasMany(db.Community,{foreignKey:'subBoard',sourceKey:'subBoard'})
    }
   
}