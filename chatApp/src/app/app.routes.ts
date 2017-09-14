import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const router: Routes = [
    { path: '' , component : LoginComponent},
    { path: 'signup' , component : SignupComponent},
    { path: 'login' , component : LoginComponent}
];
export const routes: ModuleWithProviders =  RouterModule.forRoot(router);
