import { Directive, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[aos]',
  standalone: true,
})
export class ViewportAnimateDirective implements OnInit, OnDestroy {
  // constructor(private shit: ElementRef) {
  //   console.log(this.shit);
  // }

  // @HostListener('window:scroll', ['$event']) onScroll(e: Event) {
  //   console.log(e);
  // }

  ngOnInit(): void {
    console.log('init', this);
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
