import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  IsLoading:boolean = false;
  ApiError:string = '';
  registerForm!:FormGroup;
  constructor(private _AuthService:AuthService, private _Router:Router, private _formBuilder:FormBuilder ){}
ngOnInit(): void {
  this._CreateForm();
}
_CreateForm(){
    this.registerForm = this._formBuilder.group({
    firstname:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    lastname:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    phonenumber:[null,[Validators.required,Validators.pattern(/^01[012][0-9]{8}/)]],
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8}$/)]],
    confirmedPassword:[null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8}$/)]]
  },{validators:this.passwordMatchValidator});
}

onSignUp(registerForm:FormGroup) :void
{
  this.IsLoading = true;
  if (registerForm.valid) {
    this._AuthService.SignUp(registerForm.value).subscribe({
      next:(response:any) => {
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

passwordMatchValidator(control:AbstractControl){
  return control.get('password')?.value ===
         control.get('confirmedPassword')?.value
         ? null:{notMatching:true}
}

}
