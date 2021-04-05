import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';
import { FormContainerComponent } from '../form-container/form-container.component';
import { FormManagerComponent } from '../form-manager.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ RegisterFormComponent, FormContainerComponent, FormManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have email and password and confirm password', () => {
    component.fields = [
      {
        name: 'email',
        validators: [Validators.email, Validators.required]
      },
      {
        name: 'password',
        validators: [Validators.required, Validators.minLength(8)]
      },
      {
        name: 'confirmPassword',
        display: 'Confirm Password',
        validators: [Validators.required, Validators.minLength(8)]
      },
    ];
    fixture.detectChanges();
    expect(component).toMatchSnapshot();
  });
});
