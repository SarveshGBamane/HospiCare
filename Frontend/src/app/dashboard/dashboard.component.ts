import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalDoctors = 0;
  totalPatients = 0;
  totalAppointments = 0;

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts() {
    this.doctorService.getAllDoctors()
      .subscribe(data => this.totalDoctors = data.length);

    this.patientService.getAllPatients()
      .subscribe(data => this.totalPatients = data.length);

    this.appointmentService.getAllAppointments()
      .subscribe(data => this.totalAppointments = data.length);
  }
}
