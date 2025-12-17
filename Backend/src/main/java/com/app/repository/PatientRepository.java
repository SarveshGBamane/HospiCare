package com.app.repository;

import org.springframework.data.repository.CrudRepository;
import com.app.model.Patient;

public interface PatientRepository extends CrudRepository<Patient, Long> {
}
