import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-main/app.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AboutUsComponent } from './components/layout/about-us/about-us.component';
import { BrandsComponent } from './components/core/brands/brands.component';
import { CategoriesComponent } from './components/core/categories/categories.component';
import { HomeComponent } from './components/core/home/home.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/core/main-slider/main-slider.component';
import { SeemorePipe } from './components/core/seemore.pipe';
import { SearchPipe } from './components/core/search.pipe';
import { BasketComponent } from './components/core/basket/basket.component';
import { ProductsComponent } from './components/core/products/products.component';
import { CheckoutComponent } from './components/core/checkout/checkout.component';
import { CheckoutSuccessComponent } from './components/core/checkout-success/checkout-success.component';
import { HeaderInterceptor } from './components/core/basket/Header-Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsComponent,
    BrandsComponent,
    CategoriesComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SeemorePipe,
    SearchPipe,
    BasketComponent,
    ProductsComponent,
    CheckoutComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {provide:HTTP_INTERCEPTORS, useClass:HeaderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
