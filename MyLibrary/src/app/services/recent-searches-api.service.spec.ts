import { TestBed } from '@angular/core/testing';

import { RecentSearchesApiService } from './recent-searches-api.service';

describe('RecentSearchesApiService', () => {
  let service: RecentSearchesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentSearchesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
