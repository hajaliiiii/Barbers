const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const Hairdressers = sequelize.define('Hairdressers', {
    phone: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Full_Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Code_Meli: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    User_Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
    },
}, {
    tableName: 'Hairdressers',
    timestamps: true ,
    paranoid: true,
    deletedAt: 'deletedAt'
});


module.exports = Hairdressers;
