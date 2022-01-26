import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flow, Page } from '../domain';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  flows: Page<Flow> | null = null;

  @Output()
  pageChange = new EventEmitter<number>();

  get pages() {
    if (!this.flows?.total) {
      return [];
    }

    return new Array(Math.ceil(this.flows?.total / 2));
  }

}
