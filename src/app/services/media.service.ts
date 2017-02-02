import { Injectable } from '@angular/core';


@Injectable()
export class MediaService {

<<<<<<< HEAD
  private url: String = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};

  constructor(private http: Http, private router: Router) { }

   setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }

  login = () => {
    return this.http.post(this.url + '/login', this.user)
     .subscribe(
       resp => {
         console.log(resp.json());
         // convert user object to string and save userdata to local storage
         // navigate to front
        if (localStorage.getItem('user')){
            this.router.navigate(['']);
        }
        else{
          localStorage.setItem('user', JSON.stringify(this.user));
          this.router.navigate(['']);
        }
       },
       error => {
         console.log(error);
       }
     );
  }

=======
  constructor() { }
>>>>>>> cb1ddc57d88228d531e8becc6d2ecd0c76d79830




}
