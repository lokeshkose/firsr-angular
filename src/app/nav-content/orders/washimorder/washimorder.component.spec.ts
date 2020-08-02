import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashimorderComponent } from './washimorder.component';

describe('WashimorderComponent', () => {
  let component: WashimorderComponent;
  let fixture: ComponentFixture<WashimorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashimorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashimorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
