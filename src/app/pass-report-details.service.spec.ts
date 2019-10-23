import { TestBed } from '@angular/core/testing';

import { PassReportDetailsService } from './pass-report-details.service';

describe('PassReportDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassReportDetailsService = TestBed.get(PassReportDetailsService);
    expect(service).toBeTruthy();
  });
});
