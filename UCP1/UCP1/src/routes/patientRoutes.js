const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();

router.get('/', patientController.index);
router.get('/add', patientController.add);
router.post('/add', patientController.addPatient);
router.get('/edit/:id', patientController.edit);
router.post('/edit', patientController.updatePatient);
router.get('/delete/:id', patientController.deletePatient);

module.exports = router;
