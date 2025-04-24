import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListingsFormComponent } from './car-listings-form.component';

describe('CarListingsFormComponent', () => {
  let component: CarListingsFormComponent;
  let fixture: ComponentFixture<CarListingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListingsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
