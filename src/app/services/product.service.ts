import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ProductCategory } from '../commons/product-category';
import { Products } from '../commons/product/Product';
import { ProductCateogry } from '../commons/product/productcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl="http://localhost:9190/products";
  private productCategory = "http://localhost:9190/product-category";
  

  constructor(private httpClient:HttpClient) { }

  getProductList(theCategoryId:number):Observable<Products[]>{
    const idpassed:number = theCategoryId;
    const searchUrl =this.baseUrl+"/search/findByCategoryId?id="+idpassed;
    //@TODO need to build the URL based on category id ..will come back to this!!
    
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response=>response._embedded.products)
    );
  }
  getProductCategory() :Observable<ProductCateogry[]>{
    const catUrl = this.baseUrl+"/product-category";
    return this.httpClient.get<GetResponsecategory>(catUrl).pipe(
      map(response=>response._embedded.products)
    );
  }
 
}

interface GetResponse{
  _embedded:{
    products:Products[];
  }
}
interface GetResponsecategory{
  _embedded:{
    products:ProductCateogry[];
  }
}