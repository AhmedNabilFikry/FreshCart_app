import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { CartComponent } from './components/core/cart/cart.component';
import { CategoriesComponent } from './components/core/categories/categories.component';
import { AboutUsComponent } from './components/layout/about-us/about-us.component';
import { BrandsComponent } from './components/core/brands/brands.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';

const routes: Routes = [
  {path:'',
   redirectTo:'home',
   pathMatch:'full'
  },
  {path:'home',
   component:HomeComponent
  }
  ,{path:'cart',
   component:CartComponent
  }
  ,{path:'categories',
   component:CategoriesComponent
  }
  ,{path:'about-us',
   component:AboutUsComponent
  }
  ,{path:'brands',
   component:BrandsComponent
  }
  ,{path:'login',
   component:LoginComponent
  }
  ,{path:'register',
   component:RegisterComponent
  }
  ,{path:'**',
   component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
