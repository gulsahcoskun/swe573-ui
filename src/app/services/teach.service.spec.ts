import { TestBed } from '@angular/core/testing';

import { TeachService } from './teach.service';

describe('TeachService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeachService = TestBed.get(TeachService);
    expect(service).toBeTruthy();
  });
});
