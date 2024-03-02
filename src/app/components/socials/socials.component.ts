import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from 'src/app/shared/directives';

@Component({
  standalone: true,
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
  imports: [AnimateOnScrollDirective],
})
export class SocialsComponent {}
