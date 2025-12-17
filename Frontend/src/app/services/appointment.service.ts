import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:9007/api/appointments';

  constructor(private http: HttpClient) {}

  getAllAppointments() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addAppointment(appointment: any) {
    return this.http.post(this.baseUrl, appointment);
  }

  // ✅ UPDATE (POST, NOT PUT)
  updateAppointment(id: number, appointment: any) {
    return this.http.post(`${this.baseUrl}/update/${id}`, appointment);
  }

  deleteAppointment(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
