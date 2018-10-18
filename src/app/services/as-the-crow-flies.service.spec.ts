import { TestBed, inject } from '@angular/core/testing';

import { AsTheCrowFliesService } from './as-the-crow-flies.service';

describe('AsTheCrowFliesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsTheCrowFliesService]
    });
  });

  it('should be created', inject([AsTheCrowFliesService], (service: AsTheCrowFliesService) => {
    expect(service).toBeTruthy();
  }));
});
