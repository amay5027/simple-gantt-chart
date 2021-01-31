import { TestBed } from '@angular/core/testing';

import { DateHelperService } from './date-helper.service';

describe('DateHelperService', () => {
  let service: DateHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
