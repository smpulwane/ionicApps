import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    effect: 'flip'

  };
  img = '../../assets/imgs/veto.JPG';
  code: string;
  pass: string;
  errMsg: string;
  constructor(private loginService: LoginService, private router: Router, private tranService: RouteService) { }

  ngOnInit() {

    if(this.tranService.getTransactionRoute()){
       this.router.navigate(['/tabs/tab1']);
    }

  }
  ionViewDidEnter(){
    if(this.tranService.getTransactionRoute()){
      this.router.navigate(['/tabs/tab1']);
   }
  }

  ionViewDidLoad(){
    if(this.tranService.getTransactionRoute()){
      this.router.navigate(['/tabs/tab1']);
   }
  }

  ionViewWillEnter(){
    if(this.tranService.getTransactionRoute()){
      this.router.navigate(['/tabs/tab1']);
   }
  }

  ionViewWillUnload(){
    if(this.tranService.getTransactionRoute()){
      this.router.navigate(['/tabs/tab1']);
   }
  }

  _login() {

    if (this.loginService.loginAttempt(this.code, this.pass) ) {

      this.router.navigate(['/tabs/tab1']);
    }

    this.errMsg = this.loginService.getError();

  }
  change(){
    this.errMsg = '';
  }
}
