package com.app.repository;

import org.springframework.data.repository.CrudRepository;
import com.app.model.Doctor;

public interface DoctorRepository extends CrudRepository<Doctor, Long> {
}
