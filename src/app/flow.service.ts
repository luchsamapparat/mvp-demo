import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Flow, Page } from "./domain";

const pageSize = 2;

const flows: Flow[] = [
  { id: 1, name: "Flow eins" },
  { id: 2, name: "Flow zwei" },
  { id: 3, name: "Flow drei" },
  { id: 10, name: "Flow eins (0)" },
  { id: 20, name: "Flow zwei (0)" },
  { id: 30, name: "Flow drei (0)" },
  { id: 100, name: "Flow eins (00)" },
  { id: 200, name: "Flow zwei (00)" },
  { id: 300, name: "Flow drei (00)" },
  { id: 1000, name: "Flow eins (000)" },
  { id: 2000, name: "Flow zwei (000)" },
  { id: 3000, name: "Flow drei (000)" },
]

@Injectable({
  providedIn: "root"
})
export class FlowService {

  getFlows(filterByName: string | null, page: number): Observable<Page<Flow>> {
    return of({
      total: flows.length,
      page,
      rows: flows
        .filter(({ name }) => (filterByName === null) || name.includes(filterByName))
        .slice(page * pageSize, page * pageSize + pageSize)
    });

  }

}
