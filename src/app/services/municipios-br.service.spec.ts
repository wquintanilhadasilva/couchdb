import { TestBed, inject } from '@angular/core/testing';

import { MunicipiosBrService } from './municipios-br.service';

describe('MunicipiosBrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MunicipiosBrService]
    });
  });

  it('should be created', inject([MunicipiosBrService], (service: MunicipiosBrService) => {
    expect(service).toBeTruthy();
  }));
});
