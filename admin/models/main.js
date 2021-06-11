const Sequelize = require('sequelize')

module.exports = class Main extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            main:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            subBoard:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            watchaut:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            },
            url:{
                type:Sequelize.STRING(100),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'main',
            tableName:'mains',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}
   