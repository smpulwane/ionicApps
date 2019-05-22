import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../tab1/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../tab1/transaction.model';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.page.html',
  styleUrls: ['./conf.page.scss'],
})
export class ConfPage implements OnInit {

  transaction: Transaction [];
  trasationID = '';
  constructor(private transactionService: TransactionService, private router: Router,private tranService: RouteService) { }

  ngOnInit() {

    this.transactionService.currentTransaction.subscribe( data => {

      this.transaction = data === null ? [] : data ;

     });

  }

  confirmPayment() {

    this.transactionService.setTransactionsDB(this.transaction);

    this.transactionService.deleteTransaction();
    this.tranService.setTransactionRoute(true);
    this.router.navigate(['intro']);
  }
}
