import { Component } from '@angular/core';
import { AnimateOnScrollDirective, HighlightDirective } from 'src/app/shared/directives';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [HighlightDirective, AnimateOnScrollDirective],
})
export class AboutComponent {}
