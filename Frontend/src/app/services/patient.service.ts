import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:9007/api/patients';

  constructor(private http: HttpClient) {}

  getAllPatients() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addPatient(patient: any) {
    return this.http.post(this.baseUrl, patient);
  }

  // ✅ UPDATE PATIENT (POST instead of PUT)
  updatePatient(id: number, patient: any) {
    return this.http.post(`${this.baseUrl}/update/${id}`, patient);
  }

  deletePatient(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
