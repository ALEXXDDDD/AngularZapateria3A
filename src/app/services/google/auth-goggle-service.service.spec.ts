import { TestBed } from '@angular/core/testing';

import { AuthGoogleService } from './auth-goggle-service.service';

describe('AuthGoggleServiceService', () => {
  let service: AuthGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
