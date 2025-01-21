import { TestBed } from '@angular/core/testing';

import { CovcenwardsService } from './covcenwards.service';

describe('CovcenwardsService', () => {
  let service: CovcenwardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcenwardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
