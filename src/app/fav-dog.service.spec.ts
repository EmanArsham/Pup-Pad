import { TestBed } from '@angular/core/testing';

import { FavDogService } from './fav-dog.service';

describe('FavDogService', () => {
  let service: FavDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
