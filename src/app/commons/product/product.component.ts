import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Products[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listproducts();

  }
  listproducts(){
    this.productService.getProductList().subscribe(
      data=>{
        this.products =data;
      }
    )
  }

}
