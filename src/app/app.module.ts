import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { VeilleComponent } from './veille/veille.component';
import { BtsComponent } from './bts/bts.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ArticleVeilleComponent } from './article-veille/article-veille.component';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { PatrimoineComponent } from './patrimoine/patrimoine.component';
import {GithubProjectsComponent} from "./github-projects/github-projects.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParcoursComponent,
    VeilleComponent,
    BtsComponent,
    CompetenceComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    ArticleVeilleComponent,
    PatrimoineComponent,
    GithubProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}], // Ajout de cette ligne
  bootstrap: [AppComponent]
})
export class AppModule { }
