import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/tab1/transaction.model';
import { TransactionService } from 'src/app/tab1/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  transaction: Transaction [];
  cash = 0;

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {


    this.transactionService.currentTransaction.subscribe( data => {

      this.transaction = data === null ? [] : data ;

     });


  }

  pay() {

    if (this.cash > 0) {

      const amount = this.transaction[0].subtotal;
      if ( this.cash >= amount) {

        this.transaction[0].change = (this.cash - amount);
        
        this.transactionService.updateTransactionData(this.transaction);

      } else if ( this.cash < amount) {

        return;
      }

      this.router.navigate(['/conf/']);

    }

  }

}
