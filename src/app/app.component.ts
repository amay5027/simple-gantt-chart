import { Component } from '@angular/core';
import { IGanttChartEvent } from './gantt-chart/_models/gantt-chart-event.model';
import { IGanttCharRow } from './gantt-chart/_models/gantt-chart-row.model';
import { IGanttChartMileStone } from './gantt-chart/_models/gantt-chart-milestone.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gantt-chart';
  rows: IGanttCharRow[];
  constructor() {
    this.rows = [
      {name: 'Sprint plan', events:  [
                        {name: 'Design sprint', startDate: new Date('2021-01-01'),  endDate: new Date('2021-01-31')} as IGanttChartEvent,
                        {name: 'Sprint 1', startDate: new Date('2021-02-03'),  endDate: new Date('2021-02-17')} as IGanttChartEvent,
                        {name: 'Design sprint', startDate: new Date('2021-03-01'),  endDate: new Date('2021-03-31')} as IGanttChartEvent,
                        {name: 'Sprint 2', startDate: new Date('2021-04-05'),  endDate: new Date('2021-04-19')} as IGanttChartEvent
                        
                      ],
                        mileStones: [
                                    {name:'Feature complete', date: new Date('2021-04-15')} as IGanttChartMileStone]
      } as IGanttCharRow,
      {name: 'Market activation', events:  [
                                    {name: 'Market activity', startDate: new Date('2021-02-15'),  endDate: new Date('2021-02-28')} as IGanttChartEvent
                                    ],
        mileStones: [{name:'Funding round complete', date: new Date('2021-01-28')} as IGanttChartMileStone]
      } as IGanttCharRow,
      {name: 'Google ads campaign', events:  [
                                    {name: 'Busy period', startDate: new Date('2021-03-02'),  endDate: new Date('2021-03-15')} as IGanttChartEvent
                              ]      
      } as IGanttCharRow,
      {name: 'Client feedback', events:  [
                                    {name: 'Manual collection', startDate: new Date('2021-03-15'),  endDate: new Date('2021-03-30')} as IGanttChartEvent
                              ]      
      } as IGanttCharRow,
      {name: 'Implementation window', events:  [
                                    {name: 'Busy period', startDate: new Date('2021-04-15'),  endDate: new Date('2021-04-30')} as IGanttChartEvent
                              ]      
      } as IGanttCharRow

    ]
  }
}
