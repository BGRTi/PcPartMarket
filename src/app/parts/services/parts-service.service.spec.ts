import { TestBed } from '@angular/core/testing';

import { PartsServiceService } from './parts-service.service';

describe('PartsServiceService', () => {
  let service: PartsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
