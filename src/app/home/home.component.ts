import { Competence } from './../models/competence.model';
import { Project } from './../models/project.model';
import {Component, NgModule, OnInit} from '@angular/core';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  competences!: Competence[];
  projects!: Project[];

  faUser = faUser;
  faEye = faEye;




scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
}


  ngOnInit() {
    var typed = new Typed('.multitext', {
      strings: ['Développeur', 'Codeur', 'Alternant', 'Floppeur'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      startDelay: 1000,
      showCursor: false,


    });

    this.competences = [
      {
        imageUrl: '../assets/Image/git.png',
        title: 'Version Controller',
        description: 'J’utilise des outils tels que Git pour versionner mes projets' +
        ' et pour faciliter le travail en équipe.'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'WEB DEVELOPMENT',
        description: 'Je créer des interfaces avec différents langages comme le HTML, PHP,'+
        'CSS, JS mais aussi avec des framework comme Laravel, Angular ...'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'APP DEVELOPEMENT',
        description: 'Je créer également des applications, avec différents langages '+
        'comme Python, Java .'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'Gestion du patrimoine informatique',
        description: 'BLABLABLA'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'Travailler en mode projet',
        description: 'BLABLABLA'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'Developper la présence en ligne d\'une orga',
        description: 'BLABLABLA'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'Repondre au incident et demande d\'évolutions',
        description: 'BLABLABLA'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'Organiser son deve pro',
        description: 'BLABLABLA'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'Mettre a dispo de sutilisateurs un services informatiques',
        description: 'BLABLABLA'
      },
    ];

    this.projects = [
      {
        imageUrl: '../assets/Image/portfolio.png',
        title: 'Portfolio',
        description: 'Il s’agit du portfolio que vous êtes en train de consulter.'+
        ' Il a été réalisé avec le framework Angular',
        site_link: 'https://portfolio.ldesfontaine.me/',
        github_link: 'https://github.com/ldesfontaine/portfolio-angular',
      },
      {
        imageUrl: '../assets/Image/location.png',
        title: 'Projet location de voiture',
        description:'Il s’agit d’un site de location de voiture.'+
        ' Il a été réalisé avec le framework Laravel',
        site_link: 'https://garage.ldesfontaine.me/',
        github_link: 'https://github.com/ldesfontaine/location',
      },
      {
        imageUrl: '../assets/Image/bash_script.png',
        title: 'Borabora',
        description:'Il s’agit d’un un site de gestion d\'hotel',
        site_link: 'https://garage.ldesfontaine.me/',
        github_link: 'https://github.com/ldesfontaine/lamp_installer_wp',
      },
      {
        imageUrl: '../assets/Image/bash_script.png',
        title: 'Lamp & WP Installer',
        description:'Il s’agit d’un script en bash'+
          ' facilitant l\'installation d\'un environement LAMP & WP',
        github_link: 'https://github.com/ldesfontaine/lamp_installer_wp',
      },
      {
        imageUrl: '../assets/Image/bash_script.png',
        title: 'Documentations',
        description:'Il s’agit d’un repository contenant toutes mes documentatiosn',
        github_link: 'https://github.com/ldesfontaine/lamp_installer_wp',
      },
      {
        imageUrl: '../assets/Image/bash_script.png',
        title: 'CrunchyTrack',
        description:'Il s’agit d’une extension chrome',
        github_link: 'https://github.com/ldesfontaine/lamp_installer_wp',
      },
    ];

  }
}
