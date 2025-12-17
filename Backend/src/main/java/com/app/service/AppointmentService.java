package com.app.service;

import com.app.model.Appointment;
import java.util.List;

public interface AppointmentService {

    Appointment bookAppointment(Appointment appointment);
    Appointment getAppointmentById(Long id);
    List<Appointment> getAllAppointments();
    void cancelAppointment(Long id);
}
