import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AboutComponent,
  ContactsComponent,
  ExperienceComponent,
  FooterComponent,
  HomeComponent,
  NavbarComponent,
  SocialsComponent,
} from './components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ContactsComponent,
    AboutComponent,
    SocialsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HomeComponent, NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
