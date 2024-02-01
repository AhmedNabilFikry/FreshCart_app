import { ApiService } from './../api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from '../models/Iproduct';
import { unsubscribe } from 'diagnostics_channel';
import { Subscription } from 'rxjs';
import { BasketService } from '../basket/basket.service';
import { BasketItem } from '../basket/BasketItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!:Iproduct[];
  searchTerm!:string;
  showButton:boolean = false;
  isLoading:boolean = false;
  private productSubscribtion!:Subscription;
  constructor(private _apiService:ApiService, private _basketService:BasketService){}
  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(){
    this.isLoading = true;
   this.productSubscribtion =  this._apiService.GetProducts().subscribe({
      next:(response:any) =>{
        this.products = response;
      },
      error:(err) =>{
        console.log('Error fetching products:', err);
      },
      complete:() => {
        this.isLoading = false;
      }
    });
  }

  addToCart(productId: number) {
  const product = this.products.find((p) => p.id === productId);

  if (!product) {
    return;
  }

  const basketItem: BasketItem = {
    id: productId,
    name: product.name,
    price: product.price,
    category: product.category,
    imageUrl: product.imageUrl,
    quantity: 1
  };

  this._basketService.addToCart(basketItem).subscribe({
    next :(res:any) => {
      console.log(res.items)
      this._basketService.basketItemsCount.next(res.items.length);
    },
    error :(err) => {console.log(err)}
  })

}

ngOnDestroy(): void {
  this.productSubscribtion.unsubscribe();
}

}
