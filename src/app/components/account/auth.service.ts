import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if (typeof(localStorage) !== 'undefined' && localStorage.getItem('userToken')) {
      this.SaveUserData();
    }
  }

  userdata = new BehaviorSubject(null);

  SaveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    this.userdata.next(decodedToken);
    console.log(this.userdata);
  }

  SignUp(registerData:object):Observable<any>
  {
  return this._HttpClient.post('https://localhost:7144/api/Account/Register',registerData);
  }

  SignIn(loginData:object):Observable<any>
  {
  return this._HttpClient.post('https://localhost:7144/api/Account/Login',loginData);
  }

  SignOut(){
    localStorage.removeItem('userToken');
    this.userdata.next(null);
    this._Router.navigate(['/login'])
  }




}
