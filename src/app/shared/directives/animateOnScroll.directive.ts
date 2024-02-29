import { animate, state, style, transition } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[aos]',
  standalone: true,
})
export class AnimateOnScroll implements OnInit {
  nativeElement: any;

  @Input() aos: string = '1000';
  @Input() aosPosition: string = '-6.25rem';
  @Input() aosDelay: number = 0;

  constructor(private el: ElementRef) {
    this.nativeElement = el.nativeElement;

    this.nativeElement.style.opacity = '0';
  }

  isElementVisible = (): boolean => {
    if (this.nativeElement) {
      const rect = this.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      return topShown && bottomShown;
    }

    return false;
  };

  setElementVisibility = (): void => {
    if (this.isElementVisible()) {
      setTimeout(() => {
        this.nativeElement.style.marginTop = '0';
        this.nativeElement.style.opacity = '1';
        this.nativeElement.style.translate = '0 0';
      }, this.aosDelay);
    }
  };

  @HostListener('window:scroll', ['$event']) onScroll(): void {
    this.setElementVisibility();
  }

  ngOnInit(): void {
    this.nativeElement.style.transition = `all ${this.aos}ms`;
    this.nativeElement.style.translate = `0 ${this.aosPosition}`;

    this.setElementVisibility();
  }
}
