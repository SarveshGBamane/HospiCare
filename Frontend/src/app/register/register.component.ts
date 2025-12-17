import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    if (!this.user.username || !this.user.password) {
      alert('All fields are required');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Admin registered successfully');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Registration failed (username may already exist)');
      }
    });
  }
}
