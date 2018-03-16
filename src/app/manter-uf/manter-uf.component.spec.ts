import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterUfComponent } from './manter-uf.component';

describe('ManterUfComponent', () => {
  let component: ManterUfComponent;
  let fixture: ComponentFixture<ManterUfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterUfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
