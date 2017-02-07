import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private url: String = 'http://media.mw.metropolia.fi/wbma';
  private user: any = {};
  private loggedIn: boolean = false;

  constructor(private http: Http, private router: Router) { }

   setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }

  login = () => {
    return this.http.post(this.url + '/login', this.user)
     .subscribe(
       resp => {
         const dataFromServer = resp.json();
         this.user = dataFromServer.user;
         this.user.token = dataFromServer.token;

        if (localStorage.getItem('user')){
            this.loggedIn = true;
            this.router.navigate(['']);
        }else {
          localStorage.setItem('user', JSON.stringify(this.user));
          this.loggedIn = true;
          this.router.navigate(['']);
        }
       },
       error => {
         console.log(error);
       }
     );
  }

}
