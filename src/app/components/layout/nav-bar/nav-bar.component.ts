import { AuthService } from './../../account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  constructor(private _AuthService:AuthService){}
  IsLogin:boolean = false;
  userName:any = {};
ngOnInit(): void {
  this._AuthService.userdata.subscribe({
    next: () =>{
      if (this._AuthService.userdata.getValue() !== null) {
        this.IsLogin = true;
        this.userName=this._AuthService.userdata.getValue();
      }else{
        this.IsLogin = false;
      }
    }
  })
}

SingOut() :void
{
  this._AuthService.SignOut();
}
}
