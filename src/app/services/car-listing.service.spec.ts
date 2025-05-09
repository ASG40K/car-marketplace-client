import { TestBed } from '@angular/core/testing';

import { CarListingService } from './car-listing.service';

describe('CarListingService', () => {
  let service: CarListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
