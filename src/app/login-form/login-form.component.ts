import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/form-models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginSubmit = new EventEmitter<LoginModel>();

  constructor() {
    // TODO configure validators dynamically
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginSubmit.emit(this.loginForm.value);
  }

}
