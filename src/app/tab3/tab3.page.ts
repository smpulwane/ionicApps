import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor (private router: Router, private transRoute: RouteService){}

  logout() {

    this.transRoute.setTransactionRoute(false);

    this.router.navigate(['/intro/']);

  }

}


