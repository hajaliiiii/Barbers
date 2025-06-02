const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');

router.post('/register', userController.createUser);
router.post('/add-reservation', userController.addReservation);

router.get('/', userController.getUsers);
router.get('/get-user/:id', userController.getUser);

router.delete('/delete/:id', userController.deleteUser);
router.delete('/delete-reservation/:id', userController.deleteReservation);
router.put('/update/:id', userController.updateUser);
router.put('/update-payment/:id', userController.updateReservation);


module.exports = router;
