import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { Item } from './item.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class TransactionService{

  private transaction: Transaction[];
  
  constructor(private storage: Storage) { }


  updateTransactionData(transction: Transaction []) {
   
    this.storage.set('transaction', transction);

  }

  getAllTransactions() {

    return this.storage.get('transaction')
               .then(
                 (transaction) =>{
                   this.transaction = transaction == null ? [] : transaction;
                   return this.transaction.slice();
                 }
               );
    // returns a copy of products array, without affecting the original array
  }
  getTransaction(transactionId: string){


      return this.storage.get('transaction')
      .then(
        (transaction) =>{
          this.transaction = transaction == null ? [] : transaction;
          this.transaction.slice();
          return {
            ...this.transaction.find( _transaction => {
                  return _transaction.id === transactionId;
                 }
      
            )};
        }
      );

  }

  getTransactionItem(itemId: string, item: Item[]){
    return {
      ...item.find( _transaction => {
            return _transaction.id === itemId;
           }

      )};

  }

}
