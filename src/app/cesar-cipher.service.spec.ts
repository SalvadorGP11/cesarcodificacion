import { TestBed } from '@angular/core/testing';

import { CesarCipherService } from './cesar-cipher.service';

describe('CesarCipherService', () => {
  let service: CesarCipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesarCipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
