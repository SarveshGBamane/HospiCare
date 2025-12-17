import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: any[] = [];
  doctors: any[] = [];

  isEditMode = false;
  editPatientId: number | null = null;

  patient = {
    name: '',
    age: null,
    gender: '',
    phone: '',
    address: '',
    disease: '',
    doctor: { id: null }
  };

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.loadPatients();
    this.loadDoctors();
  }

  loadPatients() {
    this.patientService.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  loadDoctors() {
    this.doctorService.getAllDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  addOrUpdatePatient() {
    if (this.isEditMode && this.editPatientId) {
      this.patientService
        .updatePatient(this.editPatientId, this.patient)
        .subscribe(() => {
          alert('Patient updated successfully');
          this.resetForm();
          this.loadPatients();
        });
    } else {
      this.patientService.addPatient(this.patient).subscribe(() => {
        alert('Patient added successfully');
        this.resetForm();
        this.loadPatients();
      });
    }
  }

  editPatient(p: any) {
    this.isEditMode = true;
    this.editPatientId = p.id;

    this.patient = {
      name: p.name,
      age: p.age,
      gender: p.gender,
      phone: p.phone,
      address: p.address,
      disease: p.disease,
      doctor: { id: p.doctor?.id }
    };
  }

  deletePatient(id: number) {
    if (confirm('Are you sure?')) {
      this.patientService.deletePatient(id).subscribe(() => {
        this.loadPatients();
      });
    }
  }

  resetForm() {
    this.isEditMode = false;
    this.editPatientId = null;

    this.patient = {
      name: '',
      age: null,
      gender: '',
      phone: '',
      address: '',
      disease: '',
      doctor: { id: null }
    };
  }
}
