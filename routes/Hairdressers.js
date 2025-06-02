const express = require('express');
const router = express.Router();
const hairdressersController = require('../controllers/Hairdressers');
const authGuard = require("../middlewares/authGuard");
const roleGuard = require("../middlewares/roleGuard");

router.post('/register', hairdressersController.createHairdressers);
router.post('/create-services', hairdressersController.createServiceHairdressers);

router.get('/get-hairdressers/:id', hairdressersController.getHairdresser);
router.get('/get-services/:id', hairdressersController.getServiceHairdressers);
router.get('/',  hairdressersController.getHairdressers);
router.get('/get-personnel/:id', hairdressersController.getPersonnelHairdressers);

router.delete('/delete/:id', authGuard, roleGuard("ADMIN"), hairdressersController.deleteHairdressers);
router.delete('/delete-service/:id', hairdressersController.deleteServiceHairdressers);
router.delete('/delete-personnel/:id', hairdressersController.deletePersonnelHairdressers);

router.put('/update/:id', hairdressersController.updateHairdressers);
router.put('/update-service/:id', hairdressersController.updateServiceHairdressers);
router.put('/update-personnel/:id', hairdressersController.updatePersonnelHairdressers);

module.exports = router;
