import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LogoutService {

  private user: any = {};

  constructor(private router: Router, private loginService: LoginService) { }

  logout = () => {

    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
    this.router.navigate(['']);
  }

}
