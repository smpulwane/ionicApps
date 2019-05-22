import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private transactionRoute = new BehaviorSubject(false);
  currentTransactionRoute = this.transactionRoute.asObservable();
  route = false;

  constructor() { }

    setTransactionRoute(val: boolean) {
      this.transactionRoute.next(val);
    }

    getTransactionRoute(): boolean {
      this.currentTransactionRoute.subscribe(
        data => {
          this.route = data === null ? false : data;
        }
      );
      return this.route;
    }
}
