import { Component } from '@angular/core';
import { ViewportAnimateDirective } from 'src/app/shared/directives/viewportAnimate.directive';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ViewportAnimateDirective],
})
export class HomeComponent {
  constructor() {}
}
