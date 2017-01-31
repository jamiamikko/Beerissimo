import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

logout = () => {
    this.mediaService.logout();
  }
}
