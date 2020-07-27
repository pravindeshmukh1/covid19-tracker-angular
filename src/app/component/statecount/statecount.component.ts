import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidcountService } from 'src/app/services/covidcount.service/covidcount.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-statecount',
  templateUrl: './statecount.component.html',
  styleUrls: ['./statecount.component.scss'],
})
export class StatecountComponent implements OnInit {
  totalState: [];
  constructor(
    private countService: CovidcountService,
    private snackBar: MatSnackBar
  ) {}

  getStateData() {
    this.countService.getStateCount().subscribe(
      (data) => {
        var arr = Object.keys(data);
        var arrObj = arr.map((key) => {
          return { [key]: data[key] };
        });
        this.totalState = arrObj[2].stateData;
      },
      (err) => {
        this.snackBar.open('Error Occured at get state count data', ' ', {
          duration: 2000,
        });
      }
    );
  }
  ngOnInit(): void {
    this.getStateData();
  }
}
