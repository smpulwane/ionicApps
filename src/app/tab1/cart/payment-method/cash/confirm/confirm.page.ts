import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/tab1/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/tab1/transaction.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  transaction: Transaction [];
  trasationID = '';
  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {

    this.transactionService.currentTransaction.subscribe( data => {

      this.transaction = data === null ? [] : data ;

     });

  }

  confirmPayment() {

    this.transactionService.setTransactionsDB(this.transaction);

    this.transactionService.deleteTransaction();
    this.router.navigate(['/tabs/tab1']);
  }

}
