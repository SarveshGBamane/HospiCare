import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: any[] = [];

  isEditMode = false;
  editDoctorId: number | null = null;

  doctor = {
    name: '',
    specialization: '',
    phone: '',
    availability: true
  };

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctorService.getAllDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  addOrUpdateDoctor() {
    if (this.isEditMode && this.editDoctorId) {
      this.doctorService
        .updateDoctor(this.editDoctorId, this.doctor)
        .subscribe(() => {
          alert('Doctor updated successfully');
          this.resetForm();
          this.loadDoctors();
        });
    } else {
      this.doctorService.addDoctor(this.doctor).subscribe(() => {
        alert('Doctor added successfully');
        this.resetForm();
        this.loadDoctors();
      });
    }
  }

  editDoctor(d: any) {
    this.isEditMode = true;
    this.editDoctorId = d.id;

    this.doctor = {
      name: d.name,
      specialization: d.specialization,
      phone: d.phone,
      availability: d.availability
    };
  }

  deleteDoctor(id: number) {
    if (confirm('Are you sure?')) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        this.loadDoctors();
      });
    }
  }

  resetForm() {
    this.isEditMode = false;
    this.editDoctorId = null;

    this.doctor = {
      name: '',
      specialization: '',
      phone: '',
      availability: true
    };
  }
}
