const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userName:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            userIdx:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            userPsw:{
                type:Sequelize.STRING(255),
                allowNull:false,
            },
            courseName:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            paycheck:{
                type:Sequelize.BOOLEAN,
                allowNull:true
            },
            userBirth:{
                type:Sequelize.DATE,
                allowNull:false,
            },
            created_at:{
                allowNull:false,
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
            },
            userTel:{
                allowNull:false,
                unique:true,
                type:Sequelize.INTEGER
            },
            userImg:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            userEtc:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            userAddress:{
                type:Sequelize.STRING(100),
                allowNull:true
            },
            employmentStatus:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            },
            portfolio:{
                type:Sequelize.BOOLEAN,
                allowNull:false

            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'user',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
    
}