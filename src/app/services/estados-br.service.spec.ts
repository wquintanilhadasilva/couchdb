import { TestBed, inject } from '@angular/core/testing';

import { EstadosBrService } from './estados-br.service';

describe('EstadosBrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadosBrService]
    });
  });

  it('should be created', inject([EstadosBrService], (service: EstadosBrService) => {
    expect(service).toBeTruthy();
  }));
});
