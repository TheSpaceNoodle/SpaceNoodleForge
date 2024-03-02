import { Component } from '@angular/core';
import { HighlightDirective, AnimateOnScrollDirective } from 'src/app/shared/directives';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [AnimateOnScrollDirective, HighlightDirective],
})
export class HomeComponent {}
