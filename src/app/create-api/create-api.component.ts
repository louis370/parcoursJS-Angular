import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ArticleApi } from '../models/article-api';

@Component({
  selector: 'app-create-api',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-api.component.html',
  styleUrl: './create-api.component.css'
})
export class CreateApiComponent {
  service:ArticleService = inject(ArticleService)
  isOpen:Boolean = false

  applyForm = new FormGroup({
    title: new FormControl(""),
    category: new FormControl(""),
    price: new FormControl(0),
    image: new FormControl(""),
    description: new FormControl(""),
    rate: new FormControl(0),
    count: new FormControl(0),
  })

  save() {
    this.service.storeApi(
      this.applyForm.value.title??"",
      this.applyForm.value.category??"",
      this.applyForm.value.price??0,
      this.applyForm.value.image??"",
      this.applyForm.value.description??"",
    ).then((article:ArticleApi) => {
      this.service.articles.unshift(article)
    })

    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

}
