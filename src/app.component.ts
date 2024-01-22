import { Component } from '@angular/core';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings' [swimlaneSettings]='swimlaneSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`,
})
export class AppComponent {
  public data: Object[] = kanbanData;
  public cardSettings: any = {
    contentField: 'Summary',
    headerField: 'Id',
  };
  public swimlaneSettings: any = { keyField: 'Assignee' };
}
