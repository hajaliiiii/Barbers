const express = require('express');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const db = require('./models');
const userRoutes = require('./routes/User');
const hairdressersRoutes = require('./routes/Hairdressers');
const personnelRoutes = require('./routes/Personnel');


const app = express();
app.use(express.json());
app.use(
    session({
        secret: "Secret key",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);
app.use('/hairdressers', hairdressersRoutes);
app.use('/personnel', personnelRoutes);

db.sequelize.sync({alter: true}).then(() => {
    console.log('✅ Database connected and synced!');
    app.listen(3000, () => {
        console.log('🚀 Server running at http://localhost:3000');
    });
}).catch((err) => {
    console.error('❌ DB connection failed:', err);
});
