import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userdashboard1Component } from './userdashboard1.component';

describe('Userdashboard1Component', () => {
  let component: Userdashboard1Component;
  let fixture: ComponentFixture<Userdashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userdashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userdashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
