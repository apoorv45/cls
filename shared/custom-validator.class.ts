import { AbstractControl, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const confirmPassword = control.value;
    const newPasswordControl = control.root.get('newPassword');
    if (newPasswordControl) {
      return newPasswordControl.value != confirmPassword ? { 'confirmPassword': { confirmPassword } } : null;
    } else {
      return null;
    }
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]:any} => {
    const email = control.value;
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if(email!="" && (email.length<=5 || !EMAIL_REGEXP.test(email))){
      return { "incorrectMailFormat": true };
    }
    return null;
  }
}