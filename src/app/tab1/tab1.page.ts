import { Component, OnInit } from '@angular/core';
import {ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  total : number = 0;
  items : number = 0;
  price : number = 50;

  products: Product[];

  constructor (private productService: ProductService ){

  }

  ngOnInit(){
   this.products = this.productService.getAllProducts();
  }


  addProduct(price){
    this.items +=1;
    this.total += price;  }
}
