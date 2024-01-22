import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KanbanModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public data: Object[] = kanbanData;
  public cardSettings: any = {
    contentField: 'Summary',
    headerField: 'Id',
  };
  public swimlaneSettings: any = { keyField: 'Assignee' };
}
