import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  userdata = null;

  SaveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    this.userdata = decodedToken;
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





}
