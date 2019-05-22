import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../transaction.model';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.page.html',
  styleUrls: ['./discount.page.scss'],
})
export class DiscountPage implements OnInit {
  
  discountValue = 0;
  discountType = 0;
  transaction: Transaction [];
  checkDiscountCall: boolean = false;
  constructor(private transactionService: TransactionService,private router: Router) { }

  ngOnInit() {

    this.transactionService.currentTransaction.subscribe( data => { 

      this.transaction = data === null ? [] : data ;
  
     });
  }


  setDiscountType(type: number): void {
    this.discountType = type;
    this.checkDiscountCall = true;
  }

  save(): void {
    if (this.checkDiscountCall) {
      this.transactionService.discount(this.discountType, this.discountValue);
      this.router.navigate(['cart']);
    }

  }

}
