// models/Personnel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Services = sequelize.define('Services', {
    Title: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Duration: {
        type: DataTypes.STRING,
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
    tableName: 'Services',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deletedAt'
});

module.exports = Services;
