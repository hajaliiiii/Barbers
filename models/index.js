const sequelize = require('../db');
const User = require('./User');
const Hairdressers = require('./Hairdressers');
const Personnel = require('./Personnel');
const Services = require('./Services');
const Reservations = require('./Reservations');

// رلیشن های مربوط به ارایشگر و پرسنل هاش
Hairdressers.hasMany(Personnel, {
    foreignKey: 'Hairdresser_Id',
    as: 'personnel'
});

Personnel.belongsTo(Hairdressers, {
    foreignKey: 'Hairdresser_Id',
    as: 'hairdresser'
});
// رلیشن های مربوط به ارایشگر و خدماتش
Hairdressers.hasMany(Services, {
    foreignKey: 'Hairdresser_Id',
    as: 'services'
});

Services.belongsTo(Hairdressers, {
    foreignKey: 'Hairdresser_Id',
    as: 'hairdresser'
});
// رلیشن های کاربر ، سرویس ، آرایشگر به جدول رزرو
Hairdressers.hasMany(Reservations, {
    foreignKey: 'Hairdresser_Id',
    as: 'Reservation'
});
Reservations.belongsTo(Hairdressers, {
    foreignKey: 'Hairdresser_Id',
    as: 'hairdresser'
});

User.hasMany(Reservations, {
    foreignKey: 'User_id',
    as: 'Reservation'
});
Reservations.belongsTo(User, {
    foreignKey: 'User_id',
    as: 'users'
});

Services.hasMany(Reservations, {
    foreignKey: 'Service_id',
    as: 'Reservation'
});
Reservations.belongsTo(Services, {
    foreignKey: 'Service_id',
    as: 'services'
});


const db = {
    sequelize,
    User,
    Hairdressers,
    Personnel,
    Services,
    Reservations,

};

module.exports = db;
