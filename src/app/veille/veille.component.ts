import {Article} from './../models/article.model';
import {Component, OnInit} from '@angular/core';

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
        imageUrl: '../assets/Image/chatDev.png',
        title: 'ChatDev',
        description: 'ChatDev est une entreprise virtuelle de développement de logiciels elle fonctionne grâce à une structure multi-agent .',
        lien: 'https://medium.com/chat-gpt-now-writes-all-my-articles/chatdev-use-natural-language-to-control-your-own-software-company-a33b7bc135c2',
      },
      {
        imageUrl: '../assets/Image/gorilla-cli.png',
        title: 'gorilla-cli c\'est quoi ?',
        description: 'Gorilla CLI simplifie les commandes en ligne en générant des suggestions basées sur votre objectif, supportant 1500 APIs. 🦍',
        lien: 'https://www.zetoolbox.fr/blog/guide-complet-dutilisation-de-notion-en-video',
      },
      {
        imageUrl: '../assets/Image/coda.png',
        title: 'Coda c\'est quoi ?',
        description: 'Coda.io permet de créer des dossiers, des notes, des to do list complexes, un roadmap ou des guidelines, vous faites comme vous voulez.',
        lien: 'https://firebearstudio.com/blog/what-is-coda-io.html',
      },
      {
        imageUrl: '../assets/Image/privategpt.jpg',
        title: 'Private Chat GPT  ',
        description: 'Si vous ne voulez plus partager vos données avec openAI c\'est possible !',
        lien: 'https://medium.com/@imicknl/how-to-create-a-private-chatgpt-with-your-own-data-15754e6378a1',
      },
      {
        imageUrl: '../assets/Image/dallE3.jpeg',
        title: 'Chat-GPT + Dall-E 3 ',
        description: 'Vous voulez génerer des images plus que réels, c\'est bientôt possible !',
        lien: 'https://www.linkedin.com/news/story/chatgpt-gets-an-image-generator-5769452/',
      },
      {
        imageUrl: '../assets/Image/uizard.png',
        title: 'Uizard',
        description: 'Cette outils permet de créer des maquettes de site web en quelques minutes.',
        lien: 'https://christopherdeane.medium.com/rapid-prototyping-in-uizard-ab69e403bfa2',
      },
      {
        imageUrl: '../assets/Image/Arc.png',
        title: 'ARC web browser',
        description: 'Il s\'agit d\'un nouveau navigateur, avec une UI très minimaliste et des fonctionnalités intéressantes.',
        lien: 'https://www.theverge.com/23462235/arc-web-browser-review',
      },
      {
        imageUrl: '../assets/Image/adnStockage.png',
        title: 'Stockage par ADN',
        description: 'Stocker des données dans l\'ADN humain, est ce que c\'est possible ?.',
        lien: 'https://www.youtube.com/watch?v=KMg2tQ511d4',
      },
      {
        imageUrl: '../assets/Image/ReRam.png',
        title: 'Nouvelle technologie de stockage',
        description: 'la ReRam qu\'est ce que c\'est ?.',
        lien: 'https://www.youtube.com/watch?v=7MJybRBlqiM',
      },
      {
        imageUrl: '../assets/Image/article_git.jpg',
        title: 'Github c\'est quoi ?',
        description: 'Présentation de GitHub pour un Débutant .',
        lien: 'https://kinsta.com/fr/base-de-connaissances/base-de-connaissances-github/',
      },
    ];
  }
}
