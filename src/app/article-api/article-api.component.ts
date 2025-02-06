import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-api',
  imports: [NgFor, ArticleComponent, RouterLink],
  templateUrl: './article-api.component.html',
  styleUrl: './article-api.component.css'
})
export class ArticleApiComponent {
  service:ArticleService = inject(ArticleService)
  articles!:Article[]

  ngOnInit() {
    this.service.findAll().then((articleApi:Article[]) => {
      this.service.articles = articleApi
      this.articles = this.service.articles
    })
  }
}
