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
  public checkDifference = false;

  constructor(private transactionService: TransactionService,private router: Router) {
    //this._transaction  =  this.transactionService.getAllTransactions();
  }

  ngOnInit() {

    this.getTransationData();

    if ( this._transaction !== null) {

      if ( this._transaction[0].total !== this._transaction[0].subtotal){
        this.checkDifference = true;
      }
   }
  }



  ionViewDidEnter(){
    this.getTransationData();

  }

  formatDiscout(discountType: string, discountValue:number): string{

    if (discountType === '%') {
      return discountValue + '%';
    } else if (discountType === 'R') {
      return 'R' + discountValue;
    }

  }


  getTransationData(){
    this.transactionService.currentTransaction.subscribe( data => { 

      this._transaction = data === null ? [] : data ;
  
     });
  }


  editItem() { 
    this.router.navigate(['edit-item']);

  }

  goback() {

    this.router.navigate(['tabs/tab1']);

  }
  removeItem(ItemId: string){
    this.transactionService.removeItem(ItemId);
  }

  deleteTransaction() {
    this.transactionService.removeTransaction();
    this.router.navigate(['tabs/tab1']);
  }

}
