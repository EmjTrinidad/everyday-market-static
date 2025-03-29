import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './modules/core/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, 
  { path: 'register', component: RegisterPageComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
