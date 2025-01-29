import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
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
    this.service.store(
      this.applyForm.value.title??"",
      this.applyForm.value.category??"",
      this.applyForm.value.price??0,
      this.applyForm.value.image??"",
      this.applyForm.value.description??"",
      this.applyForm.value.rate??0,
      this.applyForm.value.count??0,
    )

    this.isOpen = true

    this.applyForm = new FormGroup({
      title: new FormControl(""),
      category: new FormControl(""),
      price: new FormControl(0),
      image: new FormControl(""),
      description: new FormControl(""),
      rate: new FormControl(0),
      count: new FormControl(0),
    })
  }

  close() {
    this.isOpen = false
  }
}
