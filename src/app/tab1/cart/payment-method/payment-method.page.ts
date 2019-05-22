import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../transaction.service';
import { Transaction } from '../../transaction.model';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {
 
  disabled = true;
  transaction: Transaction [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.currentTransaction.subscribe( data => { 

      this.transaction = data === null ? [] : data ;
  
     });
  }

}
