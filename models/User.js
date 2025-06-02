const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('Users', {
    phone: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'Users',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deletedAt'

});

module.exports = User;
