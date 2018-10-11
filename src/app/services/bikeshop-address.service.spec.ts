import { TestBed, inject } from '@angular/core/testing';

import { BikeshopAddressService } from './bikeshop-address.service';

describe('BikeshopAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeshopAddressService]
    });
  });

  it('should be created', inject([BikeshopAddressService], (service: BikeshopAddressService) => {
    expect(service).toBeTruthy();
  }));
});
