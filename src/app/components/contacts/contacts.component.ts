import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({ once: true });
  }
}
