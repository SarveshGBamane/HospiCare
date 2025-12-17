import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = 'http://localhost:9007/api/users';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials, {
      responseType: 'text'
    });
  }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  setLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', 'ADMIN');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMIN';
  }
}
