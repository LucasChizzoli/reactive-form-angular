import { FormGroup } from '@angular/forms';

const passwordConfirmValidation = (
  form: FormGroup,
  passwordKey = 'password',
  confirmPasswordKey = 'confirmPassword'
): () => { confirmPassword: boolean } | null => {
  return () => {
    if (form.get(confirmPasswordKey)?.value !== form.get(passwordKey)?.value) {
      return { confirmPassword: true };
    }
    return null;
  };
};

export const FormValidations = {
  passwordConfirmValidation,
};
