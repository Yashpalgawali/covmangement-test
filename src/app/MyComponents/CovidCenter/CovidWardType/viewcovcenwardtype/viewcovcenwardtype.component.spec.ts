import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcovcenwardtypeComponent } from './viewcovcenwardtype.component';

describe('ViewcovcenwardtypeComponent', () => {
  let component: ViewcovcenwardtypeComponent;
  let fixture: ComponentFixture<ViewcovcenwardtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcovcenwardtypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcovcenwardtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
