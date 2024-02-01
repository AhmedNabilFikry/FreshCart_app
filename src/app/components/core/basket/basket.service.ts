import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BasketItem } from './BasketItem';
import { Iproduct } from '../models/Iproduct';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketItemsCount = new BehaviorSubject(0);
  private headers: HttpHeaders;
  constructor(private _httpClient: HttpClient,@Inject(PLATFORM_ID) private platformId: Object) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthorizationHeader()
    });
    this.getLoggedUserBasket().subscribe({
      next:(data) => {
        this.basketItemsCount.next(data.items.length)
        console.log(this.basketItemsCount)
      },
      error :(err) => {
        console.log(err);
      }
    })
  }
  private getAuthorizationHeader(): string {
    if (isPlatformBrowser(this.platformId)) {
      return `Bearer ${localStorage.getItem('userToken')}`;
    } else {
      return '';
    }
  }

  addToCart(item:BasketItem|Iproduct):Observable<any>
  {
    return this._httpClient.post<any>(`https://localhost:7144/api/Basket/AddToCart`,item);
  }
  updateItemQuantity(productId:number, quantity:number):Observable<any>
  {
    return this._httpClient.put(`https://localhost:7144/api/Basket/UpdateCartItemQuantity?productId=${productId}`,quantity)
  }

  removeFromCart(productId:number):Observable<any>{
    return this._httpClient.delete(`https://localhost:7144/api/Basket/RemoveFromCart?productId=${productId}`);
  }
  getLoggedUserBasket():Observable<any>{
    return this._httpClient.get(`https://localhost:7144/api/Basket/GetBasket`);
  }

  onlinePayment(BasketID:string) :Observable<any>{
    return this._httpClient.post(`https://localhost:7144/api/Payment/CreatePayment?BasketId=${BasketID}`, null)
  }
}
