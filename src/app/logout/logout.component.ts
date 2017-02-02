import { LogoutService } from './../services/logout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: LogoutService) { }

  ngOnInit() {
  }

logout = () => {
    this.logoutService.logout();
  }
}
