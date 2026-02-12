const { sequelize } = require('../config/config')
const { Datatypes } = require('sequelize')

const User = require('./user.model')(sequelize, Datatypes)

module.exports = {
    sequelize,
    User
}