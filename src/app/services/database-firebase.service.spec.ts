import { TestBed } from '@angular/core/testing';

import { DatabaseFirebaseService } from './database-firebase.service';

describe('DatabaseFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseFirebaseService = TestBed.get(DatabaseFirebaseService);
    expect(service).toBeTruthy();
  });
});
