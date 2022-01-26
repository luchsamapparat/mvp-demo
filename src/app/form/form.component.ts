import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Rule } from '../domain';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input()
  formId: string = "myform";

  @Input()
  set rule(rule: Rule | null) {
    if (rule === null) {
      return;
    }
    this.form.setValue(rule);
  }

  @Output()
  formSubmit = new EventEmitter<Rule>();

  @Output()
  nameChange = new EventEmitter<string>();

  form = this.formBuilder.group({
    name: ['Foo'],
    details: ['']
  });

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form.controls['name'].valueChanges
      .pipe(debounceTime(500))
      .subscribe(name => this.nameChange.emit(name));
  }

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

}
