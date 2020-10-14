import { TestBed } from '@angular/core/testing';

import { ContractAddingService } from './contract-adding.service';

describe('ContractAddingService', () => {
  let service: ContractAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
