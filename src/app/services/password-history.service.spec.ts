import { TestBed } from '@angular/core/testing';

import { PasswordHistoryService } from './password-history.service';

describe('PasswordHistoryService', () => {
  let service: PasswordHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
