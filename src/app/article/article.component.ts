import { Component, Input, inject } from '@angular/core';
import { Article } from '../models/article';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ArticleApi } from '../models/article-api';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input()article!:Article;

  service:ArticleService = inject(ArticleService)

  delete(id:number){
    if(confirm('Voulez-vous effectuer cette suppression ?')){
      this.service.destroyApi(id).then((articleApi:ArticleApi) => {
        const index = this.service.articles.findIndex(article => article.id == articleApi.id)

        this.service.articles.splice(index, 1)
      })
    }
  }

}
