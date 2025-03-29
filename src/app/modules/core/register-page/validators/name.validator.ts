import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidName]',
  standalone: true, 
  providers: [{ provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }]
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!value) return null; 
    if (value.length < 5) return { minLength: true };
    if (!nameRegex.test(value)) return { invalidName: true };

    return null;
  }
}
