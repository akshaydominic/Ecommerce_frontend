import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './commons/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes,RouterModule } from '@angular/router';

import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';


const routes:Routes = [
  {path:'category/:id',component:ProductComponent},
  {path:'category',component:ProductComponent},
  {path:'products',component:ProductComponent},
  {path:'',redirectTo: '/products',pathMatch:'full'},
  {path:'**',redirectTo:'/products',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCategoryMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
