import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ResetPasswordComponent } from './restore-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormManagerComponent } from './form-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CardComponent,
    RegisterFormComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    FormContainerComponent,
    FormManagerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
