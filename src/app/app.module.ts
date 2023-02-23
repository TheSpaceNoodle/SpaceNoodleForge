import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ContactsComponent } from 'src/app/components/contacts/contacts.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SocialsComponent } from 'src/app/components/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ContactsComponent,
    AboutComponent,
    NavbarComponent,
    SocialsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
