import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceManagementDeleteComponent } from './absence-management-delete.component';

describe('AbsenceManagementDeleteComponent', () => {
  let component: AbsenceManagementDeleteComponent;
  let fixture: ComponentFixture<AbsenceManagementDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceManagementDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceManagementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
