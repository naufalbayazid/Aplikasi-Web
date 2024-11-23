let patients = [
    { id: 1, name: 'John Doe', age: 30, disease: 'Flu' },
    { id: 2, name: 'Jane Smith', age: 25, disease: 'Cough' }
  ];
  
  module.exports = {
    getAllPatients: () => patients,
    getPatientById: (id) => patients.find(patient => patient.id === id),
    addPatient: (patient) => {
      patient.id = patients.length + 1;
      patients.push(patient);
    },
    updatePatient: (id, updatedPatient) => {
      let patient = patients.find(p => p.id === id);
      if (patient) {
        patient.name = updatedPatient.name;
        patient.age = updatedPatient.age;
        patient.disease = updatedPatient.disease;
      }
    },
    deletePatient: (id) => {
      patients = patients.filter(patient => patient.id !== id);
    }
  };
  