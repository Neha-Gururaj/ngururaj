import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailedReportComponent } from './my-detailed-report.component';

describe('MyDetailedReportComponent', () => {
  let component: MyDetailedReportComponent;
  let fixture: ComponentFixture<MyDetailedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDetailedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
