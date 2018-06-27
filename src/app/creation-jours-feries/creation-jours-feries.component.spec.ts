import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreationJoursFeriesComponent} from './creation-jours-feries.component';

describe('CreationJoursFeriesComponent', () => {
  let component: CreationJoursFeriesComponent;
  let fixture: ComponentFixture<CreationJoursFeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreationJoursFeriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationJoursFeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
