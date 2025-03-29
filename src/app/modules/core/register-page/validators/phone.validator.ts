import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidPhone]',
  standalone: true, 
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }]
})
export class PhoneValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const phoneRegex = /^[0-9]{10}$/;

    if (!value) return null; 
    if (!phoneRegex.test(value)) return { invalidPhone: true };

    return null;
  }
}
