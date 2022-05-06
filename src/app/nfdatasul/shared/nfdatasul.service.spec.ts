import { TestBed } from '@angular/core/testing';

import { NfdatasulService } from './nfdatasul.service';

describe('NfdatasulService', () => {
  let service: NfdatasulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NfdatasulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
