import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  menuOpen = false; // ✅ for mobile menu

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.menuOpen = false;

    this.router.navigate(['/home']); // ✅ better UX than dashboard
  }
}
