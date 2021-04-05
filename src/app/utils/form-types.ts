import { FormField } from '../form-manager.component';

const getType = (control: FormField): string => {
  if (control.name.toLowerCase().includes('email')) {
    return 'email';
  }
  if (control.name.toLowerCase().includes('password')) {
    return 'password';
  }
  return 'text';
};

export const FormTypes = {
  getType,
};
