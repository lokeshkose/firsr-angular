import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edituser1Component } from './edituser1.component';

describe('Edituser1Component', () => {
  let component: Edituser1Component;
  let fixture: ComponentFixture<Edituser1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edituser1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edituser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
