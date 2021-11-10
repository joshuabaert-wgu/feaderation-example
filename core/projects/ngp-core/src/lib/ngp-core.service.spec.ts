import { TestBed } from '@angular/core/testing';

import { NgpCoreService } from './ngp-core.service';

describe('NgpCoreService', () => {
  let service: NgpCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgpCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
