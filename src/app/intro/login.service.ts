import { Injectable } from '@angular/core';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: Login [];
  errorMsg: string;

  constructor() { }

  loginAttempt(code: string, pass: string): boolean {

  if ( code === '' || code === null || code.length === 0 ||
     pass === '' || pass === null || pass.length === 0) {

      this.errorMsg = 'All fields are required';
      return false;


  }

  if ( code.toLowerCase() === 'veto101' && pass === 'Veto@2019'){

    this.errorMsg = '';
    return true;
  } else {
    this.errorMsg = 'Companycode or password is incorrect';
    return false;
  }




}

getError(): string{
  return this.errorMsg;
}

}