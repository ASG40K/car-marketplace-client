import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListingsComponent } from './car-listings.component';

describe('CarListingsComponent', () => {
  let component: CarListingsComponent;
  let fixture: ComponentFixture<CarListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
