import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  options = {
  path: 'assets/animations/wave-loop.json',
  autoplay: true,
  loop: true
};

}
