import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornchipsComponent } from './cornchips.component';

describe('CornchipsComponent', () => {
  let component: CornchipsComponent;
  let fixture: ComponentFixture<CornchipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornchipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
