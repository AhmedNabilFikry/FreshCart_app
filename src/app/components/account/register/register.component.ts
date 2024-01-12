import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private _AuthService:AuthService, private _Router:Router ){}
IsLoading:boolean = false;
ApiError:string = '';
registerForm:FormGroup = new FormGroup({
  firstname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  lastname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  phonenumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[012][0-9]{8}/)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8}$/)])
});


onSignUp(registerForm:FormGroup) :void
{
  this.IsLoading = true;
  if (registerForm.valid) {
    this._AuthService.SignUp(registerForm.value).subscribe({
      next:(response) => {
        if (response.message === 'Account Added Successfully') {
          this.IsLoading = false;
        this._Router.navigate(['/login']);
        }
      },
      error:(error) => {
        this.ApiError = error.error.message;
        this.IsLoading = false;
      }
    })
  }
}
}
