import { Component, OnInit } from '@angular/core';
import { CovidcountService } from 'src/app/services/covidcount.service/covidcount.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-totalcount',
  templateUrl: './totalcount.component.html',
  styleUrls: ['./totalcount.component.scss'],
})
export class TotalcountComponent implements OnInit {
  constructor(
    private countService: CovidcountService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  getStateData() {
    this.countService.getStateCount().subscribe(
      (data) => {
        console.log('covid19',data);
      },
      (err) => {
        this.snackBar.open('Error Occured at get state count data', ' ', {
          duration: 2000,
        });
      }
    );
  }
}
