import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('topNavigation') topNavigation;

  constructor() { }

  open = () => {

    const navigation = this.topNavigation.nativeElement;

    if (navigation.className === 'topnav') {
        navigation.className += ' active';
    } else {
        navigation.className = 'topnav';
    }
  };

  ngOnInit() {
  }


}
