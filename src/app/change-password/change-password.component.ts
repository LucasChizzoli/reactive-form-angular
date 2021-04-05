import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormValidations } from '../utils/form-validations';
import { FormField, FormManagerComponent } from '../form-manager.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends FormManagerComponent {
  /* ------ INSTRUCTIONS ------
    Add, edit or remove the items in the FIELDS array to configure the form
    Name = Unique identifier. Spaces are not allowed.
    Display (Optional) = This is used for the label of the form. If not present Name will be used instead.
    Validators (Optional) = Validators for the input. Available built-in validators https://angular.io/api/forms/Validators
    You can also create your own like passwordConfirmValidation
  */
  fields: FormField[] = [
    {
      name: 'password',
      validators: [Validators.required, Validators.minLength(8)],
    },
    {
      display: 'Confirm Password',
      name: 'confirmPassword',
      validators: [
        Validators.required,
        Validators.minLength(8),
        FormValidations.passwordConfirmValidation(this.form),
      ],
    },
  ];

  constructor() {
    super();
    /* DO NOT REMOVE THIS CODE
      Call init form to initialize and render the form
    */
    this.initForm(this.fields);
  }
}
