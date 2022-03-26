import { TestBed } from '@angular/core/testing';

import { RandomNumberGeneratorService } from './random-number-generator.service';

describe('RandomNumberGeneratorService', () => {
  let service: RandomNumberGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNumberGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate number between 1 to 100', () => {
    expect(service.getRandomNumber()).toBeGreaterThan(0);
    expect(service.getRandomNumber()).toBeLessThan(100);
  });

  it('should generate total 4 random numbers', () => {
    expect(service.getRandomNumberArray(4).length).toEqual(4);
  });
  
});
