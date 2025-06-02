const express = require('express');
const authGuard = require("./../middlewares/authGuard");
const roleGuard = require("./../middlewares/roleGuard");
const router = express.Router();
const userController = require('../controllers/User');

router.post('/register', userController.createUser);
router.post('/login', userController.login);
router.post('/add-reservation',authGuard, roleGuard("USER"), userController.addReservation);

router.get('/', authGuard, roleGuard("ADMIN"), userController.getUsers);
router.get('/get-user/:id', authGuard, roleGuard("ADMIN"), userController.getUser);

router.delete('/delete/:id', authGuard, roleGuard("ADMIN"), userController.deleteUser);
router.delete('/delete-reservation/:id',  userController.deleteReservation);
router.put('/update/:id', authGuard, roleGuard("ADMIN"), userController.updateUser);
router.put('/update-payment/:id',  userController.updateReservation);


module.exports = router;
