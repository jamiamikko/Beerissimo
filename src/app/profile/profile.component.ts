import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private username: any;
  private grade: any;

  constructor() { }

  ngOnInit() {
    this.getUserName();
    this.getGrade();
  }

  getUserName = () => {
    if (localStorage.getItem('user')) {
      this.username = JSON.parse(localStorage.getItem("user")).username;
    } else {
      this.username = 'user';
    }
  }

  getGrade = () => {
    if (localStorage.getItem('user')) {
      this.grade = JSON.parse(localStorage.getItem("user")).full_name;
    } else {
      this.grade = 'not defined';
    }
  }

}
