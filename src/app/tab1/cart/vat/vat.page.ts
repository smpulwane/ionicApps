import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.page.html',
  styleUrls: ['./vat.page.scss'],
})
export class VatPage implements OnInit {

  vat = false;

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
  }

  save() {

    if (this.vat) {
      this.transactionService.vat();
    }
    this.router.navigate(['cart']);
  }
}
