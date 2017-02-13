import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private token: string = '';

  constructor(private http: Http, private loginService: LoginService) {
    this.token = this.loginService.getUser().token;
   }

  upload = (formData: any) => {
    return this.http.post(this.url + '/media?token=' + this.token, formData).map(resp =>
    resp.json());
  }

}
