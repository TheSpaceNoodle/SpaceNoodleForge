import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  AboutComponent,
  ContactsComponent,
  ExperienceComponent,
  FooterComponent,
  HomeComponent,
  NavbarComponent,
  SocialsComponent,
} from './components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    ContactsComponent,
    FooterComponent,
    SocialsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
