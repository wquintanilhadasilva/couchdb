import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchUfComponent } from './couch-uf.component';

describe('CouchUfComponent', () => {
  let component: CouchUfComponent;
  let fixture: ComponentFixture<CouchUfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchUfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
