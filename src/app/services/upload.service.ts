import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
  private token: string = '';
  private id: number;
  //private tag: string = 'beerissimo';

  constructor(private http: Http, private loginService: LoginService) {
    this.token = this.loginService.getUser().token;
   }

  upload = (formData: any) => {
    return this.http.post(this.url + '/media?token=' + JSON.parse(localStorage.getItem('user')).token, formData).map(resp => {
      const dataFromServer = resp.json();

      this.id = dataFromServer.file_id;

      const tag: string = 'Beerissimo';

      this.addTag(this.id, tag);
      console.log(dataFromServer);
    },
    error => {
      console.log(error);
    }
    );

  }

  addTag = (id, tag) => {
    const tagObject = {
      file_id: id,
      tag: tag
    };

    return this.http.post(this.url + `/tags?token=` + JSON.parse(localStorage.getItem('user')).token, tagObject).subscribe(
      resp => {
        resp.json();
        console.log(resp);
      }
    );
  }


}
