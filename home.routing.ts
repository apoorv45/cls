import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/auth-guard.service';
import { AuthGuardGroupService } from '../shared/auth-guard-group.service';
import { HomeComponent } from './home.component';
import { HomePageComponent } from "./home-page/home-page.component";
import { SearchResultsComponent } from './search-page/search-page.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'searchProfile/:searchString', component: SearchResultsComponent },
      // {path:'profiles',component: HomePageComponent},
      { path : 'family',
        loadChildren: './family/family.module#FamilyModule'
      },
      {
        path: 'adminPanel',
        loadChildren: './admin-panel/admin-panel.module#AdminPanelModule',
        canLoad: [AuthGuardGroupService]
      }
    ]
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
