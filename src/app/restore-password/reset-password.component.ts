import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormField, FormManagerComponent } from '../form-manager.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends FormManagerComponent {
  /* ------ INSTRUCTIONS ------
   Add, edit or remove the items in the FIELDS array to configure the form
   Name = Unique identifier. Spaces are not allowed.
   Display (Optional) = This is used for the label of the form. If not present Name will be used instead.
   Validators (Optional) = Validators for the input. Available built-in validators https://angular.io/api/forms/Validators
   You can also create your own like passwordConfirmValidation
 */
  fields: FormField[] = [
    {
      name: 'email',
      validators: [Validators.required, Validators.email]
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
