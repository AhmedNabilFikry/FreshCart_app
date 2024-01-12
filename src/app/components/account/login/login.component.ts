import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private _AuthService:AuthService, private _Router:Router){}
IsLoading:boolean = false;
loginForm:FormGroup = new FormGroup({
  email:new FormControl(null,[Validators.required, Validators.email]),
  password:new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8}$/)])
});

onSignIn(loginData:FormGroup):void
{
  this.IsLoading = true;
  if (loginData.valid) {
    this._AuthService.SignIn(loginData.value).subscribe({
      next: (response) =>{
        if (response.message === 'Succeeded') {
          this.IsLoading = false;
          this._Router.navigate(['/home']);
        }
      },
      error:(error) => {
        alert(error.error.message);
      }
    })
  }
}

}
