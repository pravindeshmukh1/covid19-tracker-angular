import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidenavWidth = 8;
  ngStyle: string;
  constructor() { }

  ngOnInit(): void {
  }
  increase() {
    this.sidenavWidth = 18;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 8;
    console.log('decrease sidenav width');
  }
}
