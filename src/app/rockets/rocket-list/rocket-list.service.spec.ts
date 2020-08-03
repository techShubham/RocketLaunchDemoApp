import { TestBed } from '@angular/core/testing';

import { RocketListService } from './rocket-list.service';

describe('RocketListService', () => {
  let service: RocketListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
