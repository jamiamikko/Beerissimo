import { MediaService } from './media.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LogoutService {

  private user: any = {};

  constructor(private router: Router, private mediaService: MediaService) { }

  logout = () => {

    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
    this.router.navigate(['']);
  }

}
