import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login = (value) => {

    this.loginService.setUser(value);
    this.loginService.login();
  }

}
