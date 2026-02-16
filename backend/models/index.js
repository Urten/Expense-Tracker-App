const { sequelize } = require('../config/config')
const { DataTypes } = require('sequelize')

const User = require('./user.model')(sequelize, DataTypes)

module.exports = {
    sequelize,
    User
}