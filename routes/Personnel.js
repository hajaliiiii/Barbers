const express = require('express');
const router = express.Router();
const personnelController = require('../controllers/Personnel');


router.post('/add-personnel', personnelController.createPersonnel);
router.get('/', personnelController.getPersonnels);
router.post('/login', personnelController.getPersonnel);

module.exports = router;
