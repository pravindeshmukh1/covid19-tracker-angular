import { Component, OnInit } from '@angular/core';
import { CovidcountService } from 'src/app/services/covidcount.service/covidcount.service';
import data from '../../../assets/json/state.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  totalCase: any;
  stateName: string;

  constructor(private count: CovidcountService) {}

  mouseEnter(e, id) {
    data.forEach((state) => {
      if (id === state.statecode) {
        this.totalCase = state.confirmed;
        this.stateName = state.state;
      }
      console.log(this.totalCase);
    });
  }

  ngOnInit(): void {}
}
