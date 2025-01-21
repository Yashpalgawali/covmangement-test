import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovcendepartmentComponent } from './viewcovcendepartment.component';

describe('ViewcovcendepartmentComponent', () => {
  let component: ViewcovcendepartmentComponent;
  let fixture: ComponentFixture<ViewcovcendepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovcendepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovcendepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
