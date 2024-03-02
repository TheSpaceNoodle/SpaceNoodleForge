import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective, HighlightDirective } from 'src/app/shared/directives';
import { myWorks } from './constants';
import { MyWork } from './interfaces';

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  imports: [HighlightDirective, AnimateOnScrollDirective, NgFor, NgIf],
})
export class ExperienceComponent {
  myWorks = myWorks;

  trackByIndex(id: number, element: MyWork) {
    return id || element.title;
  }
}
