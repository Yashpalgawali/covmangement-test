import { TestBed } from '@angular/core/testing';

import { CovcenwardtypeService } from './covcenwardtype.service';

describe('CovcenwardtypeService', () => {
  let service: CovcenwardtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcenwardtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
