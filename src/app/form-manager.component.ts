import { AbstractControlOptions, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Output, EventEmitter, Component } from '@angular/core';
import { FormErrorMessages } from './utils/form-error-messages';
import { FormTypes } from './utils/form-types';

export interface FormField {
  display?: string;
  name: string;
  validators?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
}

@Component({
  template: ``
})
export class FormManagerComponent {
  getErrorMessage = FormErrorMessages.getErrorMessage;
  getType = FormTypes.getType;
  FIELDS: FormField[] = [];
  form: FormGroup;
  @Output() private submitted = new EventEmitter<any>();

  constructor() {
    this.form = new FormGroup({});
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.emit(this.form.value);
  }

  initForm(fields: FormField[]): void {
    this.FIELDS = fields;
    this.FIELDS.map(field => {
      this.form.addControl(field.name, new FormControl('', field.validators));
    });
  }
}
