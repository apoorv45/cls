import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginPageComponent} from './login-page/login-page.component';
import {LoginComponent} from './login.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        children: [
            {path: '',component: LoginPageComponent},
            {path: 'forgotPassword',loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'},
            {path:'reset/:token',loadChildren: './reset-password/reset-password.module#ResetPasswordModule'}
        ]
    }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);