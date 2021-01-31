import { IGanttChartEvent } from "./gantt-chart-event.model";
import { IGanttChartMileStone } from "./gantt-chart-milestone.model";

export interface IGanttCharRow {
    name: string;
    events: IGanttChartEvent[];
    mileStones: IGanttChartMileStone[];
}