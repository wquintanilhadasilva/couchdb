import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosBrComponent } from './estados-br.component';

describe('EstadosBrComponent', () => {
  let component: EstadosBrComponent;
  let fixture: ComponentFixture<EstadosBrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosBrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
