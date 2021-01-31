import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttChartControlComponent } from './gantt-chart-control/gantt-chart-control.component';



@NgModule({
  declarations: [GanttChartControlComponent],
  imports: [
    CommonModule
  ],
  exports: [GanttChartControlComponent]
})
export class GanttChartModule { }
