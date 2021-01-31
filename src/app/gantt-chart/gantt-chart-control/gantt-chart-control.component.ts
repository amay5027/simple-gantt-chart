import { Component, Input, OnInit } from '@angular/core';
import { IGanttChartEvent } from '../_models/gantt-chart-event.model';
import { IGanttCharRow } from '../_models/gantt-chart-row.model';
import { MonthAxis } from '../_models/month-axis.model';
import { DateHelperService } from '../_services/date-helper.service';

@Component({
  selector: 'app-gantt-chart-control',
  templateUrl: './gantt-chart-control.component.html',
  styleUrls: ['./gantt-chart-control.component.scss']
})
export class GanttChartControlComponent implements OnInit {
  @Input() rows: IGanttCharRow[];
  @Input() startDate: Date = new Date('2021-01-01');
  @Input() endDate: Date = new Date('2021-04-30');
  chartPeriodDays: number;
  monthAxis: MonthAxis[];
  colourPallete = ['#7C4DFF',
                  '#81c784',
                  '#e53935',
                  '#FF8A80',
                  '#303F9F',
                  '#40C4FF',
                  '#006064',
                  '#FF8A65']

  constructor() { 
    this.chartPeriodDays = DateHelperService.dateDifference(this.endDate, this.startDate, true);
    this.monthAxis = this.getMonths(this.startDate, this.endDate);
  }

  ngOnInit(): void {
  }

  /** Given an event calculate the percentage of days over the total gantt chart period */
  getEventDurationPercentage(event: IGanttChartEvent): number {
    const eventDays = DateHelperService.dateDifference(event.endDate, event.startDate);
    return (eventDays/this.chartPeriodDays) * 100;

  }

  /** Given an date the percentage of days over the total gantt chart period */
  getEventOffsetPercentage(eventStartDate: Date): number {
    const daysPriorToEventStart = DateHelperService.dateDifference(eventStartDate, this.startDate);
    return ((daysPriorToEventStart-1)/this.chartPeriodDays)*100;
  }

  /** Given a start and end date will return full months between period along with month names and 
   * relative duration percentages for each month
   */
  getMonths(startDate: Date, endDate: Date): MonthAxis[] {
    const startMonth = startDate.getMonth();
    const endMonth= endDate.getMonth();
    const totalDurationDays = DateHelperService.dateDifference(startDate, endDate, true);
    let months: MonthAxis[] = new Array();
    for(var i = 0; i<= endMonth - startMonth; i++) {
      const adjustedStartDate = DateHelperService.addMonths(startDate, i);
      const monthName = DateHelperService.getMonthName(adjustedStartDate);
      const daysInMonth = DateHelperService.daysInMonth(adjustedStartDate);
      const monthDurationPercentage = daysInMonth/totalDurationDays * 100;
      months.push({monthName: monthName, monthDurationPercentage: monthDurationPercentage});
    }
    return months;
  }

   /** Given colour for */
  getColour(rowIndex: number): string {
    if(this.rows.length < rowIndex) {
      return '#64b5f6';
    }

    return this.colourPallete[rowIndex];
  }

}

