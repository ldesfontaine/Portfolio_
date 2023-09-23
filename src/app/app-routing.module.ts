import { BtsComponent } from './bts/bts.component';
import { VeilleComponent } from './veille/veille.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatrimoineComponent} from "./patrimoine/patrimoine.component";
import {GithubProjectsComponent} from "./github-projects/github-projects.component";
import {TableauSyntheseComponent} from "./tableau-synthese/tableau-synthese.component";

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},

  { path: 'home', component:HomeComponent, }, // Laisser début de la liste
  { path: 'parcours', component:ParcoursComponent, }, // Laisser début de la liste
  { path: 'veille', component:VeilleComponent, }, // Laisser début de la liste
  { path: 'bts', component:BtsComponent }, // Laisser début de la liste
  { path: 'patrimoine', component:PatrimoineComponent },
  {path: 'projets',component:GithubProjectsComponent},
  {path: 'tableau-de-synthses',component:TableauSyntheseComponent},

  { path: '**', component: AppComponent, }, // Laisser a la fin de la liste
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
