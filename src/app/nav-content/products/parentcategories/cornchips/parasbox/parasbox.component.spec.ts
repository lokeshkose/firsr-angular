import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasboxComponent } from './parasbox.component';

describe('ParasboxComponent', () => {
  let component: ParasboxComponent;
  let fixture: ComponentFixture<ParasboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParasboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParasboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
