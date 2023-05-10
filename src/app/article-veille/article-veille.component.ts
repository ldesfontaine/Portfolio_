import { Article } from './../models/article.model';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-article-veille',
  templateUrl: './article-veille.component.html',
  styleUrls: ['./article-veille.component.scss']
})
export class ArticleVeilleComponent {
  @Input() articles !: Article;


}

