# GanttChart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Angular control that will allow you to display a GANTT chart for repeating events and milestones as follows:

![Alt text](/example-gantt.JPG?raw=true "Gantt Chart Example")

Would love to hear any feedback.

Features:

- Pass in a collection of "gantt chart rows" where each row contains a list of events and list of milestones.
- Pass in a start and end date for the GANTT chart period
- The axis will always show whole months from the start to the end date. Recommend showing no more than about 4 months at any given time.
- Tooltips will show the event dates for each event.
- Caters for repeating events within a given row (atypical for GANTT charts, but was the requirement for the project it was used in).
- Caters for specific milestones within each row.

Caveats:

- This metholodolgy was used in a real production application and works well, however this code has been over-simplified and abstracted from its original form in order to    remove any IP risk.
 - Min width set to 600px - may not scale that well for smaller screens/mobiles.
 - Consider hiding event text on smaller screens.
 - Test with specific event data accordingly.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
