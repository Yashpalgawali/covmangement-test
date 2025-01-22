import { TestBed } from '@angular/core/testing';

import { CovcenbedService } from './covcenbed.service';

describe('CovcenbedService', () => {
  let service: CovcenbedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcenbedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
