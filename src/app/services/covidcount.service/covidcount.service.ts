import { Injectable } from '@angular/core';
import { HttpService } from '../http.service/http.service';

@Injectable({
  providedIn: 'root',
})
export class CovidcountService {
  constructor(private httpService: HttpService) {}

  getStateCount() {
    return this.httpService.getCount(`/getAllStateData`);
  }
}
