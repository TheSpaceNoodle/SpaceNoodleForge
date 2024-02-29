import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [NgClass],
})
export class NavbarComponent {
  scrolled: number = document.scrollingElement?.scrollTop || 0;
  prevScroll!: number;
  navbarClassList: Record<string, boolean> = {
    navbar: true,
  };

  setNavbarClassList(): void {
    this.navbarClassList = {
      ...this.navbarClassList,
      'fixed-hidden': this.scrolled === 1,
      'fixed-shown': this.scrolled === 2,
    };
  }

  @HostListener('window:scroll') onScroll() {
    const currentScroll = document.scrollingElement?.scrollTop || 0;

    if (currentScroll > this.prevScroll) {
      this.scrolled = 1;
    }

    if (currentScroll < this.prevScroll && currentScroll > 0) {
      this.scrolled = 2;
    } else {
      this.scrolled = 0;
    }

    this.prevScroll = currentScroll;
    this.setNavbarClassList();
  }
}
