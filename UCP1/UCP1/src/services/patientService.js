const patientModel = require('../models/patientModel');

const getAllPatients = () => patientModel.getAllPatients();
const getPatientById = (id) => patientModel.getPatientById(id);
const addPatient = (patient) => patientModel.addPatient(patient);
const updatePatient = (id, updatedPatient) => patientModel.updatePatient(id, updatedPatient);
const deletePatient = (id) => patientModel.deletePatient(id);

module.exports = {
  getAllPatients,
  getPatientById,
  addPatient,
  updatePatient,
  deletePatient
};
