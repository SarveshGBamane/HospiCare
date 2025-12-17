package com.app.repository;

import org.springframework.data.repository.CrudRepository;
import com.app.model.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
}
