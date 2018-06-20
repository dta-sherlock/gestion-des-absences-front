import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AbsenceManagementAddComponent} from './absence-management-add.component';

describe('AbsenceManagementAddComponent', () => {
  let component: AbsenceManagementAddComponent;
  let fixture: ComponentFixture<AbsenceManagementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AbsenceManagementAddComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
