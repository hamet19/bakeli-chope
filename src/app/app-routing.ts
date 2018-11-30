import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';


const routes: Routes = [
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
  },
  {
    path:'signin',
    component:SigninComponent
},
{
    path:'signup',
    component:SignupComponent
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'Add-products',
    component:AddProductComponent
},
{
    path:'list-products',
    component:ListProductsComponent
},






  
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
  
  export class AppRoutingModule {
  
  }