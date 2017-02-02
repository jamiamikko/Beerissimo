import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 private username: string = '';
  private password: string = '';

  constructor(private loginService: LoginService) { }



  ngOnInit() {
  }

login = () => {
    const user = {
      username: this.username,
      password: this.password
    };
    this.loginService.setUser(user);
    this.loginService.login();
  }

}
