import { Component, OnInit } from '@angular/core';
import { Transaction } from '../tab1/transaction.model';
import { TransactionService } from '../tab1/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  transactions: Transaction[];

  constructor(private transService: TransactionService, private router: Router){

  }

  ngOnInit() {

    this.transService.currentTransactionDB.subscribe( data => {

      this.transactions = data === null ? [] : data;
  
     });

     console.log(this.transactions);

  }

  view( item: Transaction) { 

    this.router.navigate(['/sale/']);

  }
}
