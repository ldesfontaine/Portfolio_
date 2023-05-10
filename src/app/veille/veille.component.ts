import { Article } from './../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veille',
  templateUrl: './veille.component.html',
  styleUrls: ['./veille.component.scss']
})
export class VeilleComponent implements OnInit {

  articles!: Article[];


  ngOnInit(): void {

    this.articles = [
      {
        imageUrl: '../assets/Image/article_git.jpg',
        title: 'Github c\'est quoi ?',
        description: 'Présentation de GitHub pour un Débutant .',
        lien: 'https://kinsta.com/fr/base-de-connaissances/base-de-connaissances-github/',
      },
      {
        imageUrl: '../assets/Image/article_jira.png',
        title: 'Jira c\'est quoi ?',
        description: 'Présentation de Jira pour un Débutant .',
        lien: 'https://www.twybee.com/blog/jira-software-debutant-guide-complet/',
      },
      {
        imageUrl: '../assets/Image/article_notion.png',
        title: 'Notion c\'est quoi ?',
        description: 'Présentation de notion .',
        lien: 'https://www.zetoolbox.fr/blog/guide-complet-dutilisation-de-notion-en-video',
      },




  ];
 }
}
