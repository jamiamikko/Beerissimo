import { LogoutService } from './../services/logout.service';
import { LoginService } from './../services/login.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('topNavigation') topNavigation;

  constructor(private loginService: LoginService, private logoutService: LogoutService) { }

  loggedIn: boolean = false;
  private username;

  open = () => {

    const navigation = this.topNavigation.nativeElement;

    if (navigation.className === 'topnav') {
      navigation.className += ' active';
    } else {
      navigation.className = 'topnav';
    }
  };

  getUserName = () => {
    if (localStorage.getItem('user')) {
      this.username = JSON.parse(localStorage.getItem("user")).username;
    } else {
      this.username = 'user';
    }
  }


  ngOnInit() {
    this.getUserName();
    this.loggedIn = this.loginService.getActivity();
  }


}
