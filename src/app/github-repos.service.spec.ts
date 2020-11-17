import { TestBed } from '@angular/core/testing';

import { GithubRepoService } from './github-repos.service';

describe('GithubReposService', () => {
  let service: GithubRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
