import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AosDirections } from './types';

@Directive({
  standalone: true,
  selector: '[appAOS]',
})
export class AnimateOnScrollDirective implements OnInit {
  nativeElement!: HTMLElement;

  @Input() appAOS: string = '1000';
  @Input() aosPosition: number = 100;
  @Input() aosDelay: number = 0;
  @Input() aosDirection: AosDirections = 'bottom-top';

  translate = {
    'bottom-top': `0 ${this.aosPosition}px`,
    'top-bottom': `0 -${this.aosPosition}px`,
    'left-right': `${this.aosPosition}px 0`,
    'right-left': `-${this.aosPosition}px 0`,
  };

  constructor(private el: ElementRef) {
    this.nativeElement = el.nativeElement;
    this.nativeElement.style.opacity = '0';
  }

  ngOnInit(): void {
    this.nativeElement.style.transition = `all ${this.appAOS}ms`;
    this.nativeElement.style.translate = this.translate[this.aosDirection];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting ||
            entry.boundingClientRect.top < 0 ||
            (entry.rootBounds && entry.rootBounds.bottom > entry.boundingClientRect.bottom)
          ) {
            this.setElementVisibility();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(this.nativeElement);
  }

  isElementVisible = (): boolean => {
    if (this.nativeElement) {
      const rect = this.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0 + this.aosPosition;
      const bottomShown = rect.bottom <= window.innerHeight + 100;
      return topShown && bottomShown;
    }

    return false;
  };

  setElementVisibility = (): void => {
    setTimeout(() => {
      this.nativeElement.style.opacity = '1';
      this.nativeElement.style.translate = '0 0';
    }, this.aosDelay);
  };
}
