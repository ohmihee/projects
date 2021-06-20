const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class Course extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            courseName:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            name:{
                type:Sequelize.STRING(20),
                allowNull:false
            },
            coursetype:{
                type:Sequelize.STRING(20),
                allowNull:true
            },
            idx:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            pay:{
                type:Sequelize.INTEGER,
                allowNull:true
            },
            haed_count:{
                type:Sequelize.INTEGER,
                allowNull:true
            },
            startDate:{
                type:Sequelize.DATE,
                allowNull:true,
                get: function(){
                    return moment(this.getDataValue('startDate')).format('YYYY-MM-DD')
                }
            },
            endDate:{
                type:Sequelize.DATE,
                allowNull:true,
                get: function(){
                    return moment(this.getDataValue('endDate')).format('YYYY-MM-DD')
                }
            },
            contents:{
                type:Sequelize.STRING(255),
                allowNull:false,
            },
            time:{
                type:Sequelize.TIME,
                allowNull:true
            },
            tag:{
                type:Sequelize.STRING(50),
                allowNull:true
            },
            support:{
                type:Sequelize.STRING(100),
                allowNull:true
            },
            description:{
                type:Sequelize.STRING(100),
                allowNull:true
            },
            onoff:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Course',
            tableName:'courses',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate (db){
        db.Course.belongsTo(db.Adminlist,{foreignKey:'idx',sourceKey:'idx'})
        db.Course.hasMany(db.User,{foreignKey:'courseName',sourceKey:'courseName'})
    }
    
}