// models/Personnel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Reservation = sequelize.define('Reservation', {
    Time: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Date: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Status_Payment: {
        type: DataTypes.ENUM("Paid", "Unpaid"),
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
    },
    User_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    Service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Services',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },

}, {
    tableName: 'Reservation',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deletedAt'
});

module.exports = Reservation;
