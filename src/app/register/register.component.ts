import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register = (value) => {

    this.registerService.setUser(value);
    this.registerService.register();
  }

}
