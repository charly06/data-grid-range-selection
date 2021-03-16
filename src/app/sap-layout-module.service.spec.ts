import { TestBed } from '@angular/core/testing';

import { SapLayoutModuleService } from './sap-layout-module.service';

describe('SapLayoutModuleService', () => {
  let service: SapLayoutModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapLayoutModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
