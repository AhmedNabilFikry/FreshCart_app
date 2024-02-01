import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from './models/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }

  GetProducts():Observable<Iproduct[]>
  {
     return this._HttpClient.get<Iproduct[]>('https://localhost:7144/api/Product/GetAllProducts');
  }

  GetProductById(id:string):Observable<Iproduct>
  {
     return this._HttpClient.get<Iproduct>(`https://localhost:7144/api/Product/${id}`);
  }
  GetCategories():Observable<any>
  {
     return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`);
  }
}
