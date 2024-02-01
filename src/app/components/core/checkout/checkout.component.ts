import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { OrderService } from './order.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from './order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  deliveryMethods: any[] = [];
  shipppingAddressForm!:FormGroup;
  basketID!:string;
  isLoading:boolean = false;
  constructor
  (
    private _basketService:BasketService,
    private _orderService:OrderService,
    private _router:Router,
    private _fb:FormBuilder
  )
  {}
  ngOnInit(): void {
    this._initForm();
    this._getDeliveryMethods();
  }

  _initForm(){
    this.shipppingAddressForm=this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      street: ['', Validators.required],
      deliveryMethod: ['', Validators.required],
    });
  }

  _getDeliveryMethods(){
    this.isLoading = true;
    this._orderService.getDeliveryMethods().subscribe({
      next:(res) => {
        this.deliveryMethods = res;
        console.log(res)
      },
      error: (err) =>{
        console.log(err);
      },
      complete:() => {
        this.isLoading = false;
      }
    })
  }

  createOrder() {
    this.isLoading = true ;
    const selectedDeliveryMethodId = this.shipppingAddressForm.get('deliveryMethod')?.value;
    const selectedDeliveryMethod = this.deliveryMethods.find(method => method.id == selectedDeliveryMethodId);
    const deliveryMethod = selectedDeliveryMethod.id;
    const shippingAddress = this.shipppingAddressForm.value;

    this._basketService.getLoggedUserBasket().subscribe({
      next: (res: any) => {
        this.basketID = res.id;
        console.log(deliveryMethod);
        console.log(shippingAddress);
        console.log(this.basketID);
        this._orderService.createOrder(this.basketID, deliveryMethod,shippingAddress ).subscribe({
          next: (res) => {
            console.log(res);
            this._router.navigate(['/checkout-success'])
          },
          error: (err) => {
            console.log("Unhandled Exception ",err);
          },
         complete:() => {
          this.isLoading = false;
          this._basketService.basketItemsCount.next(0)
          this._orderService.deleteBasket(this.basketID).subscribe({
            next:(res)=>{
                console.log(res);

            },
            error:(err) => {
              console.log(err);

            }
          })
      }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
