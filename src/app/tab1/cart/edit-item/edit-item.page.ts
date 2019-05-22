import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../transaction.model';
import { TransactionService } from '../../transaction.service';
import { Item} from '../../item.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  quantity: number = 0;
  item: Item [];
  trasaction: Transaction[];
  itemID: string;

  constructor(private transtionService: TransactionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.quantity =
    this.activatedRoute.paramMap.subscribe( paramMap =>{
      if (!paramMap.has('_quantity') && !paramMap.has('_itemId') ){
        return;
      }
      this.quantity = +paramMap.get('_quantity'); // + parse to number;
      this.itemID = paramMap.get('_itemId'); // + parse to number;
    });

  }

  decrease(){

     this.quantity -= 1;
    if (this.quantity <= 0){
      this.quantity = 0;
    }



  }

  increase(){

    this.quantity += 1;
    if (this.quantity <= 0){
      this.quantity = 0;
    }

 }

 saveItem(){

   this.transtionService.updateTransactionItem(this.itemID, this.quantity);
   this.router.navigate(['/cart']);
 }



}
