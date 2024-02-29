import { Component } from '@angular/core';
import { HighlightDirective, AnimateOnScroll } from 'src/app/shared/directives';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [AnimateOnScroll, HighlightDirective],
})
export class HomeComponent {}
