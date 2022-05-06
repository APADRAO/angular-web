import { TestBed } from '@angular/core/testing';

import { GravaCoockService } from './grava-coock.service';

describe('GravaCoockService', () => {
  let service: GravaCoockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GravaCoockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
