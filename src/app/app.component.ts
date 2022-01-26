import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, switchMap, tap } from 'rxjs';
import { Rule } from './domain';
import { FlowService } from './flow.service';
import { RuleService } from './rule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  name$ = new BehaviorSubject<string | null>(null);
  page$ = new BehaviorSubject<number>(0);

  flows$ = combineLatest([
    this.name$,
    this.page$
  ]).pipe(
    tap(console.warn),
    switchMap(([name, page]) => this.flowService.getFlows(name, page))
  );

  rule$: Observable<Rule> = this.ruleService.getRule();

  constructor(
    private flowService: FlowService,
    private ruleService: RuleService
  ) { }

  onSave(rule: Rule) {
    this.ruleService.saveRule(rule);
  }

}
