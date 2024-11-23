const patientService = require('../services/patientService');

const index = (req, res) => {
  const patients = patientService.getAllPatients();
  res.render('index', { patients });
};

const add = (req, res) => {
  res.render('add');
};

const addPatient = (req, res) => {
  const { name, age, disease } = req.body;
  patientService.addPatient({ name, age, disease });
  res.redirect('/');
};

const edit = (req, res) => {
  const patient = patientService.getPatientById(Number(req.params.id));
  res.render('edit', { patient });
};

const updatePatient = (req, res) => {
  const { id, name, age, disease } = req.body;
  patientService.updatePatient(Number(id), { name, age, disease });
  res.redirect('/');
};

const deletePatient = (req, res) => {
  patientService.deletePatient(Number(req.params.id));
  res.redirect('/');
};

module.exports = {
  index,
  add,
  addPatient,
  edit,
  updatePatient,
  deletePatient
};
