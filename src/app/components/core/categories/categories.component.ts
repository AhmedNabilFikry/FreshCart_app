import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent  implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      }
    },
    nav: true
  }
  constructor(private _ApiService:ApiService){}
  categories:any[] = [];
  ngOnInit(): void {
    this._ApiService.GetCategories().subscribe({
      next:(response)=>{
        this.categories = response.data;
      },
      error:(error) => {
        console.log('Error: ', error);
      }
    });
  }
}
