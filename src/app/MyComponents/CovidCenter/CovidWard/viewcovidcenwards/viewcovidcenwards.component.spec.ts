import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovidcenwardsComponent } from './viewcovidcenwards.component';

describe('ViewcovidcenwardsComponent', () => {
  let component: ViewcovidcenwardsComponent;
  let fixture: ComponentFixture<ViewcovidcenwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovidcenwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovidcenwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
