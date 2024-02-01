import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Iproduct } from '../models/Iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
constructor(private _ApiService:ApiService, private _ActivatedRoute:ActivatedRoute){}
productId!:string;
productDetails!:Iproduct;
ngOnInit(): void {
  this.GetProduct();
}

GetProduct():void{
  this.productId = this._ActivatedRoute.snapshot.params['Id'];
  this._ApiService.GetProductById(this.productId).subscribe({
    next:(response:any)=>{
      this.productDetails = response;
    }
  })
}

getStars(rating: number): boolean[] {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating);
  }
  return stars;
}


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
      items: 1
    }
  },
  nav: true
}
}
