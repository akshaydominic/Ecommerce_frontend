import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductCateogry } from '../product/productcategory';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productcategory:ProductCateogry[];
  constructor(private productService:ProductService) { }

  ngOnInit(){
    this.getProductCategory();
  }
  getProductCategory() {
    this.productService.getProductCategory().subscribe(
      data=>{
        console.log("product category ="+JSON.stringify(data));
        this.productcategory=data;
      }
    )
  }

}
