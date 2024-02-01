import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, ShippingAddress } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'https://localhost:7144/api/Order/CreateOrder';
  constructor(private _httpClient:HttpClient) { }
  // private headers: HttpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  // })

  getDeliveryMethods():Observable<any>{
    return this._httpClient.get<any>(`https://localhost:7144/api/Order/DeliveryMethod`);
  }

  createOrder(basketID:string, deliveryMethod:number, shippingAddress:ShippingAddress): Observable<any> {
    return this._httpClient.post<any>(this.baseUrl, {
      baskektId: basketID,
      deliveryMethod: deliveryMethod,
      shippingAddress: shippingAddress
    });
  }

  deleteBasket(basketId:string):Observable<any>{
    return this._httpClient.delete(`https://localhost:7144/api/Basket?ID=${basketId}`)
  }
}
