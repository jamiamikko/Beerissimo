import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private username: string = '';
  private password: string = '';
  private email: string = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register = () => {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.registerService.setUser(user);
    this.registerService.register();
  }

}
