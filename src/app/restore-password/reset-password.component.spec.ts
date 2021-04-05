import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordComponent } from './reset-password.component';
import { FormContainerComponent } from '../form-container/form-container.component';
import { FormManagerComponent } from '../form-manager.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

describe('RestorePasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ ResetPasswordComponent, FormContainerComponent, FormManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have email', () => {
    component.fields = [
      {
        name: 'email',
        validators: [Validators.email, Validators.required]
      },
    ];
    fixture.detectChanges();
    expect(component).toMatchSnapshot();
  });
});
