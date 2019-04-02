import { Component, OnInit } from '@angular/core';
import {ProductService } from './product.service';
import { Product } from './product.model';
import { Transaction } from './transaction.model';
import { Item } from './item.model';
import {TransactionService} from './transaction.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  total: number = 0;
  items: number = 0;
  price: number = 50;
  item: Item [] = [];
  products: Product[];

  transation: Transaction [];
  

  constructor (private productService: ProductService, private transationService: TransactionService, private router: Router ){}

  ngOnInit() {
   this.products = this.productService.getAllProducts();

  }



  addProduct(product: Product) {



    this.items += 1;
    this.total += product.price;
    const _id: string =  product.title + '_' + Math.floor(Math.random() * 100000 + 1);


    if (this.item.length > 0) {

      for (let i = 0; i < this.item.length; i++) {
        if (this.item[i].title === product.title) {
  
             this.item[i].quantity += 1;
             return false;
        }
     }

    }
    

   this.item.push(
    {
      id : product.id,
      quantity: 1,
      title : product.title,
      description: product.description,
      price: product.price
  });
 
  
  }

  addToCart() {
    const _id: string =  'trsc_' + Math.floor(Math.random() * 100000 + 1);
    const date = new Date();
    const year  = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const state = minutes >= 12 ? 'PM' : 'AM';

    const _date = day + '/' + month + '/' + year;
    const _time = hour + ':' + minutes + state;

    this.transation =
     [
      {
       id: _id,
       time: _time,
       date: _date,
       total: this.total,
       discount: 0,
       vat: 0,
       subtotal: 0,
       items: this.item
      }
    ];
  
   this.transationService.updateTransactionData(this.transation);
   this.router.navigate(['cart']);
  }
   
 
 

}
