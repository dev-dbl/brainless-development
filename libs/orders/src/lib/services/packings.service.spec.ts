import { TestBed } from '@angular/core/testing';

import { PackingsService } from './packings.service';

describe('PackingsService', () => {
  let service: PackingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
