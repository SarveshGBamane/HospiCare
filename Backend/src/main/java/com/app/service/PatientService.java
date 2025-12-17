package com.app.service;

import com.app.model.Patient;
import java.util.List;

public interface PatientService {

    Patient savePatient(Patient patient);
    Patient getPatientById(Long id);
    List<Patient> getAllPatients();
    void deletePatient(Long id);
}
