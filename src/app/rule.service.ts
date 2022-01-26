import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Rule } from "./domain";

@Injectable({
  providedIn: "root"
})
export class RuleService {

  getRule(): Observable<Rule> {
    return of({
      name: 'Flow',
      details: 'Bar'
    });
  }

  saveRule(rule: Rule): Observable<Rule> {
    console.log(rule);
    return of(rule);
  }

}
