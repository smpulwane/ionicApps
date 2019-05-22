import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { Item } from './item.model';
import { HttpClient} from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transaction: Transaction[];
  private transactionDB: Transaction[];
 

  private totalSource = new BehaviorSubject(0);
  private numItemsSource = new BehaviorSubject(0);
  private transationSource = new BehaviorSubject(this.transaction);
  private transationsDBSource = new BehaviorSubject(this.transaction);

  currentTotal = this.totalSource.asObservable();
  currentNumItems = this.numItemsSource.asObservable();
  currentTransaction = this.transationSource.asObservable();
  currentTransactionDB = this.transationsDBSource.asObservable()



  constructor(private storage: Storage) { }

     discount(discountType: number, discountValue: number): void
     {
      this.syncTransaction();
      const total = this.transaction[0].total;
      let subtotal = 0;

      switch (discountType) {
        case 1:
        //code discount is disabled;
        break;
        case 2:
        subtotal = total - discountValue;
        this.transaction[0].discount = discountValue;
        this.transaction[0].discountType = 'R';
        break;
        case 3:
        subtotal = total - (total * (discountValue / 100));
        this.transaction[0].discount = discountValue;
        this.transaction[0].discountType = '%';
        break;
        /*
        code    === 1
        cash    === 2
        percent === 3
        */  
      }
      this.transaction[0].subtotal = subtotal;

      this.updateTransactionData(this.transaction);

      return;
     }
     
     deleteTransaction() {

       this.transationSource.next(null);
       this.storage.remove('transaction');
     }

     vat(): void {
       //vat is currently 15%
       this.syncTransaction();
       const total = this.transaction[0].subtotal;
       const vat = 0.15; // this value should be a configuration to cater for future changes
       const vatAmount = (total * vat);
       this.transaction[0].vat = vatAmount;
       this.transaction[0].subtotal = total + vatAmount;
       this.updateTransactionData(this.transaction);

       return;


     }// this code must be designed in a way that caters for future vat changes

     syncTransaction(){
      this.currentTransaction.subscribe( data => {

        this.transaction = data === null ? [] : data;
  
       });
     }

 
       updateTransactionData(transction: Transaction []) {

          this.transationSource.next(transction);

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
        getTransaction(transactionId: string) {


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

        getTransactionItem(itemId: string, item: Item[]) {
          return {
            ...item.find( _transaction => {
                  return _transaction.id === itemId;
                }

            )};

        }

        updateTransactionItem(itemId: string, quantity: number) {


          return this.storage.get('transaction')
          .then(
            (transaction) => {
              this.transaction = transaction == null ? [] : transaction;
              this.transaction.slice();

              this.currentTransaction.subscribe( data => {

                this.transaction = data === null ? [] : data;
          
               });

              const _items = this.transaction[0].items;
              
              if (_items.length > 0) {

                for (let i = 0; i < _items.length; i++) {
                  if (_items[i].id === itemId) {

                      _items[i].quantity = quantity;

                      this.transaction[0].items = _items;
                      this.updateTransationTotal(this.transaction[0].items);
                      this.updateTransactionData(this.transaction);


                      return;
                  }
              }

              }


            }
          );

      }

      updateTransationTotal(_items: Item []) {

        let total = 0;
        let quantity = 0;

        for (let i = 0; i < _items.length; i++) {
            total += _items[i].quantity * _items[i].price; // aggregate total cost
            quantity += _items[i].quantity; // aggregate quantity of items
          }
        this.totalSource.next(total);
        this.numItemsSource.next(quantity);
        this.transaction[0].total = total;
        return this.transaction[0].subtotal = total;
      }


      getTransactionTotal() {

       return this.getAllTransactions().then(
          (transaction) => {
            
            return transaction[0].total;

          }
        );

      }
      getTransactionTotalItems() {

        let temp = 0;

       return this.getAllTransactions().then(
          (transaction) => {

            for (let i = 0; i < transaction[0].items.length; i++) {

              temp += transaction[0].items[i].quantity;

            }
            
            return temp;

          }
        );
        
      }


      removeItem(itemId) {
      

        
        this.currentTransaction.subscribe( data => {

          this.transaction = data === null ? [] : data;
    
         });

        const items: Item[] = this.transaction[0].items;

        items.splice(items.findIndex(item => item.id === itemId), 1);

        this.transaction[0].items = items;
        this.updateTransationTotal(this.transaction[0].items);
        this.updateTransactionData(this.transaction);
        
     
     }

     removeTransaction() {

       this.transaction = [];
       this.updateTransationTotal(this.transaction[0].items);
       this.updateTransactionData(this.transaction);



     }




/* Transactions Database */
  
 setTransactionsDB(transction: Transaction []) {

  // this.storage.set('transactionsDB', transction);

  return this.storage.get('transactionsDB').then(storedOperations => {
    let storedObj = JSON.parse(storedOperations);

    if (storedObj) {
      storedObj.push(transction);
    } else {
      storedObj = transction;
    }

    this.transationsDBSource.next(storedObj);
    // Save old & new local transactions back to Storage
    return this.storage.set('transactionsDB', JSON.stringify(storedObj));
  });

}

getTransactionsDB(){

  this.currentTransactionDB.subscribe( data => {

    this.transactionDB = data === null ? [] : data;

   });


}




}
