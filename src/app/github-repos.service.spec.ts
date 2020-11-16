import { TestBed } from '@angular/core/testing';

import { GithubService } from './github-repos.service';

describe('GithubReposService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
