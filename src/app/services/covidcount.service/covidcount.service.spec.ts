import { TestBed } from '@angular/core/testing';

import { CovidcountService } from './covidcount.service';

describe('CovidcountService', () => {
  let service: CovidcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
