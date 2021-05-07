import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Products } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Products[];
  curentCategoryId:number;
  constructor(private productService:ProductService,
    private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe(()=>{
      this.listproducts();
    });
  }
  listproducts(){
    //check if the id parameter is available 
    const hasCategoryId:boolean = this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.curentCategoryId = +this.route.snapshot.paramMap.get('id');

    }else{
      this.curentCategoryId = 1;
    }
    this.productService.getProductList(this.curentCategoryId).subscribe(
      data=>{
        this.products =data;
      }
    )
  }

}
