import { TestBed } from '@angular/core/testing';

import { FitUnitsServiceService } from './fit-units-service.service';

describe('FitUnitsServiceService', () => {
  let service: FitUnitsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitUnitsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
