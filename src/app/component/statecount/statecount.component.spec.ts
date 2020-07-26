import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecountComponent } from './statecount.component';

describe('StatecountComponent', () => {
  let component: StatecountComponent;
  let fixture: ComponentFixture<StatecountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatecountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
