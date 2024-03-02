import { Component } from '@angular/core';
import { AnimateOnScrollDirective, HighlightDirective } from 'src/app/shared/directives';

@Component({
  standalone: true,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  imports: [HighlightDirective, AnimateOnScrollDirective],
})
export class ContactsComponent {}
