import { TestBed } from '@angular/core/testing';

import { CovcendoctorService } from './covcendoctor.service';

describe('CovcendoctorService', () => {
  let service: CovcendoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcendoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
