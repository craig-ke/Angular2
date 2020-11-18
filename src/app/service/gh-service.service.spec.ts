import { TestBed } from '@angular/core/testing';

import { GhServiceService } from './gh-service.service';

describe('GhServiceService', () => {
  let service: GhServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
