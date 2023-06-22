const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Tariff = sequelize.define('tariff', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    speed: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
})

const UserTariff = sequelize.define('user_tariff', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Application = sequelize.define('application', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.STRING, allowNull: false},
})

const ApplicationHelp = sequelize.define('application_help', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
})

Tariff.hasMany(UserTariff)
UserTariff.belongsTo(Tariff)

User.hasMany(UserTariff)
UserTariff.belongsTo(User)

User.hasMany(Application)
Application.belongsTo(User)

module.exports = {
    Tariff, User, UserTariff, Application,ApplicationHelp
}





