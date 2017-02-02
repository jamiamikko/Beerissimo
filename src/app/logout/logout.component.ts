import { LoginService } from './../services/login.service';
import { LogoutService } from './../services/logout.service';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: LogoutComponent) { }

  ngOnInit() {
  }

logout = () => {
    this.logoutService.logout();
  }
}
