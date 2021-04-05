import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePasswordComponent } from './change-password.component';
import { FormContainerComponent } from '../form-container/form-container.component';
import { FormManagerComponent } from '../form-manager.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ ChangePasswordComponent, FormContainerComponent, FormManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have password and confirm password', () => {
    component.fields = [
      {
        name: 'password',
        validators: [Validators.required]
      },
      {
        name: 'confirmPassword',
        display: 'Confirm Password',
        validators: [Validators.required]
      },
    ];
    fixture.detectChanges();
    expect(component).toMatchSnapshot();
  });
});
