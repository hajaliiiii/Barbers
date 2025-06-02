const express = require('express');
const router = express.Router();
const personnelController = require('../controllers/Personnel');
const authGuard = require("../middlewares/authGuard");
const roleGuard = require("../middlewares/roleGuard");


router.post('/add-personnel', authGuard, roleGuard("Hairdressers"), personnelController.createPersonnel);
router.get('/', authGuard, roleGuard("Hairdressers"), personnelController.getPersonnels);
router.post('/login', personnelController.getPersonnel);

module.exports = router;
