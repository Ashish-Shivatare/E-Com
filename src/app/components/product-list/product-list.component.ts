import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "src/app/common/product";
import { Dish } from "src/app/common/dish";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  dishes: Dish[];
  
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.listDishes();
    this.listProducts();
    var products = JSON.stringify(products);

  }
  listProducts(){
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(data);
      });    
  }

  listDishes(){
    this.productService.getDishes().subscribe(
      (dishes) => (this.dishes = dishes));
  }

}
