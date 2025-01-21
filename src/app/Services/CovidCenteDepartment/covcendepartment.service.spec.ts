import { TestBed } from '@angular/core/testing';

import { CovcendepartmentService } from './covcendepartment.service';

describe('CovcendepartmentService', () => {
  let service: CovcendepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovcendepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
