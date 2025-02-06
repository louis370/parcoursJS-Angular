import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  service:ArticleService = inject(ArticleService)
  isOpen:boolean = false
  articleId:number = -1
  article!:Article | undefined

  applyForm = new FormGroup({
    title:new FormControl(),
    category:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    image: new FormControl(),
    rate:new FormControl(),
    count:new FormControl()
  })

  ngOnInit(){
    this.articleId = Number(this.route.snapshot.paramMap.get('id'))
    this.article = this.service.getOne(this.articleId)

    this.applyForm = new FormGroup({
      title: new FormControl(this.article?.title),
      category: new FormControl(this.article?.category),
      price:new FormControl(this.article?.price),
      description: new FormControl(this.article?.description),
      image:new FormControl(this.article?.image),
      rate: new FormControl(this.article?.rating?.rate),
      count:new FormControl(this.article?.rating?.count)
    })
  }

  edit() {
    this.service.updateApi(
      this.articleId,
      this.applyForm.value.title??"",
      this.applyForm.value.category??"",
      this.applyForm.value.price??0,
      this.applyForm.value.image??"",
      this.applyForm.value.description??"",
      this.applyForm.value.rate??0,
      this.applyForm.value.count??0,
    ).then((articleApi:Article) => {
      const index = this.service.articles.findIndex(article => article.id == articleApi.id)

      this.service.articles[index].title = this.applyForm.value.title
      this.service.articles[index].category = this.applyForm.value.category
      this.service.articles[index].price = this.applyForm.value.price
      this.service.articles[index].image = this.applyForm.value.image
      this.service.articles[index].description = this.applyForm.value.description
      this.service.articles[index].rating.rate = this.applyForm.value.rate
      this.service.articles[index].rating.count = this.applyForm.value.count
    })

    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }
}
