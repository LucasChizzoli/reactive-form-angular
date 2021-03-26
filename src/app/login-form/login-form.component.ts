import { Component, EventEmitter } from '@angular/core';
import {
  AbstractControlOptions,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { LoginModel } from '../models/form-models';

export interface FormField {
  name: string;
  validators: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginSubmit = new EventEmitter<LoginModel>();

  // Add, edit or remove the items in the LOGIN_FIELDS array to configure the form
  LOGIN_FIELDS: FormField[] = [
    {
      name: 'email',
      validators: [Validators.email, Validators.required]
    },
    {
      name: 'password',
      validators: [Validators.required, Validators.minLength(8)]
    },
  ];

  constructor() {
    this.loginForm = new FormGroup({});
    this.LOGIN_FIELDS.map(loginField => {
      this.loginForm.addControl(loginField.name, new FormControl('', loginField.validators));
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginSubmit.emit(this.loginForm.value);
  }

  getType(control: FormField): string {
    if (control.name.toLowerCase() === 'email') {
      return 'email';
    }
    if (control.name.toLowerCase() === 'password') {
      return 'password';
    }
    return 'text';
  }

  getErrorMessage(control: FormField): string {
    const controlErrors = this.loginForm.get(control.name)?.errors;
    const controlName = control.name;
    if (!controlErrors) {
      return '';
    }
    if (controlErrors.required) {
      return `${controlName} is required.`;
    }
    if (controlErrors.email) {
      return `email is not valid.`;
    }
    if (controlErrors.minlength) {
      return `${controlName} must be at least ${controlErrors.minlength.requiredLength } long.`;
    }
    if (controlErrors.maxlength) {
      return `${controlName} must be ${controlErrors.maxlength.requiredLength } long.`;
    }
    return '';
  }

}
