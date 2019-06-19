import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule,PreloadAllModules } from '@angular/router';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });