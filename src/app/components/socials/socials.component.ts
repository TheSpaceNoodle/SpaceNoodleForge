import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
})
export class SocialsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({
      once: true,
    });
  }
}
