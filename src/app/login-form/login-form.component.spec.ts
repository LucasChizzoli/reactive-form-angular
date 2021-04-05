import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormContainerComponent } from '../form-container/form-container.component';
import { FormManagerComponent } from '../form-manager.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginFormComponent, FormContainerComponent, FormManagerComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have email and password', () => {
    component.fields = [
      {
        name: 'email',
        validators: [Validators.email, Validators.required]
      },
      {
        name: 'password',
        validators: [Validators.required, Validators.minLength(8)]
      },
    ];
    fixture.detectChanges();
    expect(component).toMatchSnapshot();
  });
});
