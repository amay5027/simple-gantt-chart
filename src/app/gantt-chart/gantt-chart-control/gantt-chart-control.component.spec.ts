import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttChartControlComponent } from './gantt-chart-control.component';

describe('GanttChartControlComponent', () => {
  let component: GanttChartControlComponent;
  let fixture: ComponentFixture<GanttChartControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanttChartControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttChartControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
