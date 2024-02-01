import { Component, OnInit } from '@angular/core';
import { AuthService } from '../components/account/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FreshCart_app';
  isLogin :boolean = false;
  constructor(private _authService:AuthService){}
  ngOnInit(): void {
    this.isLogin = false;
    this._authService.userdata.subscribe({
      next:(res) => {
        if (this._authService.userdata.getValue() !== null ) {
          this.isLogin = true;
        }else{
          this.isLogin = false;
        }
      }
    })
  }
}
