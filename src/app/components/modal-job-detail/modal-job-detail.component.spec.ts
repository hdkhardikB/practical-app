import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJobDetailComponent } from './modal-job-detail.component';

describe('ModalJobDetailComponent', () => {
  let component: ModalJobDetailComponent;
  let fixture: ComponentFixture<ModalJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
