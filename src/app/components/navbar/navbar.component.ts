import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  scrolled: number = 0;
  prevScroll!: number;

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    if (event.path[1].scrollY > this.prevScroll) {
      this.scrolled = 1;
    } else if (event.path[1].scrollY < this.prevScroll && event.path[1].scrollY > 0) {
      this.scrolled = 2;
    } else {
      this.scrolled = 0;
    }
    this.prevScroll = event.path[1].scrollY ? event.path[1].scrollY : 0;
    console.log(this.scrolled);
  }
}
