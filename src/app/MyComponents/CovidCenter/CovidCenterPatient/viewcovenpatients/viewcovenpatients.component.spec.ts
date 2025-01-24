import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovenpatientsComponent } from './viewcovenpatients.component';

describe('ViewcovenpatientsComponent', () => {
  let component: ViewcovenpatientsComponent;
  let fixture: ComponentFixture<ViewcovenpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovenpatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovenpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
