import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // ✅ ADD THIS
  user = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
  this.authService.login(this.user).subscribe(res => {
    if (res === 'Login successful') {
      this.authService.setLoggedIn();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  });
}

}
