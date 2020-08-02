import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaksComponent } from './naks.component';

describe('NaksComponent', () => {
  let component: NaksComponent;
  let fixture: ComponentFixture<NaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
