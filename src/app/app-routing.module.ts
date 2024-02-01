import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { CategoriesComponent } from './components/core/categories/categories.component';
import { AboutUsComponent } from './components/layout/about-us/about-us.component';
import { BrandsComponent } from './components/core/brands/brands.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { authenticationGuard } from './components/account/authentication.guard';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { MainSliderComponent } from './components/core/main-slider/main-slider.component';
import { ProductsComponent } from './components/core/products/products.component';
import { BasketComponent } from './components/core/basket/basket.component';
import { CheckoutComponent } from './components/core/checkout/checkout.component';
import { CheckoutSuccessComponent } from './components/core/checkout-success/checkout-success.component';

const routes: Routes = [
  {
   path:'',
   redirectTo:'home',
   pathMatch:'full'
  },
  {
   path:'home',
   component:HomeComponent
  },
  {
  path:'products',
   component:ProductsComponent,
   canActivate:[authenticationGuard]
  },
  {
   path:'product-details/:Id',
   component:ProductDetailsComponent,
   canActivate:[authenticationGuard]
  }
  ,
  {
   path:'basket',
   component:BasketComponent ,
   canActivate:[authenticationGuard]
  }
  ,
  {
   path:'checkout',
   component:CheckoutComponent ,
   canActivate:[authenticationGuard]
  }
  ,
  {
   path:'about-us',
   component:AboutUsComponent ,
   canActivate:[authenticationGuard]
  }
  ,
  {
    path:"checkout-success",
    component:CheckoutSuccessComponent,
    canActivate:[authenticationGuard]
  }
  ,
  {
   path:'login',
   component:LoginComponent
  }
  ,
  {
   path:'register',
   component:RegisterComponent
  }
  ,
  {
    path: 'settings',
    loadChildren: () => import('./setting/setting.module')
    .then(m => m.SettingModule) }
  ,
  {
    path:'**',
   component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
