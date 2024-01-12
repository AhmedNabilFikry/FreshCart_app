import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-main/app.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutUsComponent } from './components/layout/about-us/about-us.component';
import { BrandsComponent } from './components/core/brands/brands.component';
import { CategoriesComponent } from './components/core/categories/categories.component';
import { CartComponent } from './components/core/cart/cart.component';
import { HomeComponent } from './components/core/home/home.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsComponent,
    BrandsComponent,
    CategoriesComponent,
    CartComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
