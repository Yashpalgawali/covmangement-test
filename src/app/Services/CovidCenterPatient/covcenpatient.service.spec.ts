import { TestBed } from '@angular/core/testing';

import { CovcenpatientService } from './covcenpatient.service';

describe('CovcenpatientService', () => {
  let service: CovcenpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcenpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
