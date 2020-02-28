import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessWorkFlowComponent } from './process-work-flow.component';

describe('ProcessWorkFlowComponent', () => {
  let component: ProcessWorkFlowComponent;
  let fixture: ComponentFixture<ProcessWorkFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessWorkFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
