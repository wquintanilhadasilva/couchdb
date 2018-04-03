import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosTemplateComponent } from './estudos-template.component';

describe('EstudosTemplateComponent', () => {
  let component: EstudosTemplateComponent;
  let fixture: ComponentFixture<EstudosTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudosTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudosTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
