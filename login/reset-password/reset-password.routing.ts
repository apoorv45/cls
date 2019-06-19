import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ResetPasswordComponent } from './reset-password.component';
const appRoutes: Routes = [
    {
        path: '',
        component: ResetPasswordComponent
    }
];

export const ResetPasswordRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);