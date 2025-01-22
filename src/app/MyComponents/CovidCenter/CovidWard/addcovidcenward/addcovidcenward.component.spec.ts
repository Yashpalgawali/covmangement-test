import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcovidcenwardComponent } from './addcovidcenward.component';

describe('AddcovidcenwardComponent', () => {
  let component: AddcovidcenwardComponent;
  let fixture: ComponentFixture<AddcovidcenwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcovidcenwardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcovidcenwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
