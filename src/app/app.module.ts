import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GanttChartModule } from './gantt-chart/gantt-chart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GanttChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
