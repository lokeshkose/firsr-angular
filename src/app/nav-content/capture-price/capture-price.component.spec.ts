import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturePriceComponent } from './capture-price.component';

describe('CapturePriceComponent', () => {
  let component: CapturePriceComponent;
  let fixture: ComponentFixture<CapturePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
