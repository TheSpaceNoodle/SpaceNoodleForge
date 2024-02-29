import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = '#fff0b5';
  }
}
