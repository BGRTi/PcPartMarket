import { TestBed } from '@angular/core/testing';

import { partsService } from './parts-service.service';

describe('partsService', () => {
  let service: partsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(partsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
