import { Component, OnInit } from '@angular/core';
import { CovidcountService } from 'src/app/services/covidcount.service/covidcount.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as data from '../../../assets/json/totalCount.json';

@Component({
  selector: 'app-totalcount',
  templateUrl: './totalcount.component.html',
  styleUrls: ['./totalcount.component.scss'],
})
export class TotalcountComponent implements OnInit {
  total: number;
  active: number;
  recover: number;
  deceased: number; 
  totalData: {};
  constructor(
    private countService: CovidcountService,
    private snackBar: MatSnackBar
  ) {}

  getTotalData() {
    this.total = data.total;
    this.active = data.active;
    this.recover = data.recover;
    this.deceased = data.death;

    this.totalData = data;
  }
  ngOnInit(): void {
    this.getTotalData();
  }
}
