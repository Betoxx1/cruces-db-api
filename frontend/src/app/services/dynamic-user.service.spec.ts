import { TestBed } from '@angular/core/testing';

import { DynamicUserService } from './dynamic-user.service';

describe('DynamicUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicUserService = TestBed.get(DynamicUserService);
    expect(service).toBeTruthy();
  });
});
