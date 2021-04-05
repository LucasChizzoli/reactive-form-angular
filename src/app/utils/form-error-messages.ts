import { FormGroup } from '@angular/forms';
import { FormField } from '../form-manager.component';

const getErrorMessage = (control: FormField, form: FormGroup): string => {
  const controlErrors = form.get(control.name)?.errors;
  const controlName = control.name;
  const controlDisplay = control.display;
  if (!controlErrors) {
    return '';
  }
  if (controlErrors.required) {
    return `${controlDisplay || controlName} is required.`;
  }
  if (controlErrors.email) {
    return `email is not valid.`;
  }
  if (controlErrors.minlength) {
    return `${controlDisplay || controlName} must be at least ${controlErrors.minlength.requiredLength } long.`;
  }
  if (controlErrors.maxlength) {
    return `${controlDisplay || controlName} must be ${controlErrors.maxlength.requiredLength } long.`;
  }
  if (controlErrors.confirmPassword) {
    return 'Password doesn\'t match';
  }
  return '';
};

export const FormErrorMessages = {
  getErrorMessage,
};
