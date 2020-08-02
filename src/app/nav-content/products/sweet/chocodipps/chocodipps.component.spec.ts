import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocodippsComponent } from './chocodipps.component';

describe('ChocodippsComponent', () => {
  let component: ChocodippsComponent;
  let fixture: ComponentFixture<ChocodippsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocodippsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocodippsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
