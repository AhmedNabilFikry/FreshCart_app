import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {
  basketDetails!:any;
  isLoading : boolean = false;
constructor(private _basketService:BasketService, private  _router : Router) {}
ngOnInit(): void {
  this._basketService.getLoggedUserBasket().subscribe({
    next :(res:any) => {
      console.log('Successful response',res);
      this.basketDetails = res;
    },
    error :(err) => {
      console.log(err);
    }
  })
}

updateCartItemQuantity(productId:number, quantity:number){
  this.isLoading = true;
  this._basketService.updateItemQuantity(productId,quantity).subscribe({
    next:(res) => {
      this.basketDetails = res;
      console.log(res.items);
    },
    error : (err)=>{
      console.log(err)
    },
    complete:()=>{
      this.isLoading = false;
    }
  })
}
removeFromCart(productId:number){
  this.isLoading = true ;
  this._basketService.removeFromCart(productId).subscribe({
    next:(res) => {
      this.basketDetails = res;
      this._basketService.basketItemsCount.next(res.items.length)
      console.log(this.basketDetails);
    },
    error : (err)=>{
      console.log(err)
    },
    complete:() => {
      this.isLoading = false;
    }
  })
}

calculateTotalPrice(): number {
  let totalPrice = 0;
  if (this.basketDetails && this.basketDetails.items) {
    this.basketDetails.items.forEach((item:any) => {
      totalPrice += item.price * item.quantity;
    });
  }

  return totalPrice;
}


  onlinePayment(BasketId:string){
    this.isLoading = true;
    this._basketService.onlinePayment(BasketId).subscribe({
      next:(res) =>{
          this._router.navigate(['/checkout']);
          console.log(res)
      },
      error:(err) => {console.log(err)},
      complete:() => {
        this.isLoading = false;
      }
    })
  }

}
