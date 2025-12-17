import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:9007/api/doctors';

  constructor(private http: HttpClient) {}

  getAllDoctors() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addDoctor(doctor: any) {
    return this.http.post(this.baseUrl, doctor);
  }

  updateDoctor(id: number, doctor: any) {
    return this.http.put(`${this.baseUrl}/${id}`, doctor);
  }

  deleteDoctor(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
