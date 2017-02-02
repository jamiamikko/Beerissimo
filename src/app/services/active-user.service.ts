import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ActiveUserService {

  constructor(private loginService: LoginService) { }

  loggedIn: boolean = false;

  checkIfLoggedIn = () => {
    if (localStorage.getItem("user") !== null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
