import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsmComponent } from './editsm.component';

describe('EditsmComponent', () => {
  let component: EditsmComponent;
  let fixture: ComponentFixture<EditsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
