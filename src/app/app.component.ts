import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginSubmitted(loginFormValue: any): void {
    // Use the form values here. Calling an API for example.
    console.log(loginFormValue);
  }

  registerSubmitted(registerFormValue: any): void {
    // Use the form values here. Calling an API for example.
    console.log(registerFormValue);
  }

  changePasswordSubmitted(registerFormValue: any): void {
    // Use the form values here. Calling an API for example.
    console.log(registerFormValue);
  }

  resetPasswordSubmitted(registerFormValue: any): void {
    // Use the form values here. Calling an API for example.
    console.log(registerFormValue);
  }
}
