import { error } from 'console';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  showButton:boolean = false;
  searchTerm:string = '';
constructor(private _ApiService:ApiService){}
ngOnInit(): void {
  this.GetProducts();
}
GetProducts() {
  this._ApiService.GetProducts().subscribe({
    next: (response) => {
        this.products = response;
    },
    error: (error) => {
      console.log('Error fetching products:', error);
    }
  });
}

}
