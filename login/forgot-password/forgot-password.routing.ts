import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ForgotComponent } from './forgot-password.component';
const appRoutes: Routes = [
    {
        path: '',
        component: ForgotComponent
    }
];

export const ForgotPasswordRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);