import { TestBed } from '@angular/core/testing';

import { AddReportService } from './add-report.service';

describe('AddReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddReportService = TestBed.get(AddReportService);
    expect(service).toBeTruthy();
  });
});
