import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../transaction.service';
import { Transaction } from '../transaction.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public _transaction: Transaction [];

  constructor(private transactionService: TransactionService,private router: Router) { 
    //this._transaction  =  this.transactionService.getAllTransactions();
  }

  ngOnInit() {

  this.transactionService.getAllTransactions()
                         .then(
                           (transaction) => {
                             this._transaction = transaction;
                           }
                         );


   console.log(this._transaction);
  }

  editItem(){
    this.router.navigate(['edit-item']);
    
  }

}
