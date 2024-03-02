import { Component } from '@angular/core';
import { AnimateOnScrollDirective, HighlightDirective } from 'src/app/shared/directives';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [HighlightDirective, AnimateOnScrollDirective],
})
export class FooterComponent {}
