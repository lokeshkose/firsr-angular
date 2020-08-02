import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardsmComponent } from './userdashboardsm.component';

describe('UserdashboardsmComponent', () => {
  let component: UserdashboardsmComponent;
  let fixture: ComponentFixture<UserdashboardsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
