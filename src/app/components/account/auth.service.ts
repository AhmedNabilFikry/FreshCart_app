import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  SignUp(registerData:object):Observable<any>
{
  return this._HttpClient.post('https://localhost:7144/api/Account/Register',registerData);
}

SignIn(loginData:object):Observable<any>
{
  return this._HttpClient.post('https://localhost:7144/api/Account/Login',loginData);
}





}
