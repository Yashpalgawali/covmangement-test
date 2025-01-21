import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovcendepartmentComponent } from './addcovcendepartment.component';

describe('AddcovcendepartmentComponent', () => {
  let component: AddcovcendepartmentComponent;
  let fixture: ComponentFixture<AddcovcendepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovcendepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovcendepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
