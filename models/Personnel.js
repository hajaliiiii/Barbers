// models/Personnel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Personnel = sequelize.define('Personnel', {
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
    Gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
    },
    Hairdresser_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Hairdressers',
            key: 'id'
        },
        onDelete: 'CASCADE'
    }

}, {
    tableName: 'Personnel',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deletedAt'
});

module.exports = Personnel;
