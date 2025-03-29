import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NameValidatorDirective } from './register-page/validators/name.validator';
import { PhoneValidatorDirective } from './register-page/validators/phone.validator';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    RegisterPageComponent,
    NameValidatorDirective, 
    PhoneValidatorDirective 
  ],
  exports: [
    RegisterPageComponent,
    NameValidatorDirective,
    PhoneValidatorDirective
  ]
})
export class CoreModule { }
