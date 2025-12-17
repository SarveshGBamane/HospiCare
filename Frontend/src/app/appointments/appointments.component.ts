import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: any[] = [];
  patients: any[] = [];
  doctors: any[] = [];

  isEditMode = false;
  editAppointmentId: number | null = null;

  appointment = {
    patient: { id: null },
    doctor: { id: null },
    date: '',
    time: '',
    status: 'SCHEDULED'
  };

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
    this.loadPatients();
    this.loadDoctors();
  }

  loadAppointments() {
    this.appointmentService.getAllAppointments()
      .subscribe(data => this.appointments = data);
  }

  loadPatients() {
    this.patientService.getAllPatients()
      .subscribe(data => this.patients = data);
  }

  loadDoctors() {
    this.doctorService.getAllDoctors()
      .subscribe(data => this.doctors = data);
  }

  addOrUpdateAppointment() {
    if (this.isEditMode && this.editAppointmentId) {
      this.appointmentService
        .updateAppointment(this.editAppointmentId, this.appointment)
        .subscribe(() => {
          alert('Appointment updated successfully');
          this.resetForm();
          this.loadAppointments();
        });
    } else {
      this.appointmentService.addAppointment(this.appointment)
        .subscribe(() => {
          alert('Appointment booked successfully');
          this.resetForm();
          this.loadAppointments();
        });
    }
  }

  editAppointment(a: any) {
    this.isEditMode = true;
    this.editAppointmentId = a.id;

    this.appointment = {
      patient: { id: a.patient?.id },
      doctor: { id: a.doctor?.id },
      date: a.date,
      time: a.time,
      status: a.status
    };
  }

  deleteAppointment(id: number) {
    if (confirm('Cancel this appointment?')) {
      this.appointmentService.deleteAppointment(id)
        .subscribe(() => this.loadAppointments());
    }
  }

  resetForm() {
    this.isEditMode = false;
    this.editAppointmentId = null;

    this.appointment = {
      patient: { id: null },
      doctor: { id: null },
      date: '',
      time: '',
      status: 'SCHEDULED'
    };
  }
}
