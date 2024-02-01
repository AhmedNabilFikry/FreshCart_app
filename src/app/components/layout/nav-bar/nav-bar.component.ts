import { BasketService } from '../../core/basket/basket.service';
import { AuthService } from './../../account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  IsLogin:boolean = false;
  userName:any = {};
  BasketitemsCount:number = 0;
  constructor(private _AuthService:AuthService, private _basketService:BasketService){
    this._basketService.basketItemsCount.subscribe({
      next:(value) => {
        this.BasketitemsCount= value
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
ngOnInit(): void {
  this.IsLogin = false;
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
