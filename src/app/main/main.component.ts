import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private loggedIn: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.loginService.getActivity();

    if(!this.loggedIn) {
      this.router.navigate(['/login']);
    }
  }

}
