const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('Admin', {

    UserName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,

    },

}, {
    tableName: 'Admin',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deletedAt'

});

module.exports = User;
