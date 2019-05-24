import { TestBed } from '@angular/core/testing';

import { JlDataService } from './jl-data.service';

describe('JlDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JlDataService = TestBed.get(JlDataService);
    expect(service).toBeTruthy();
  });
});
