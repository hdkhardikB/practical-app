import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{ 
    path: '', 
    redirectTo: '/jobs', 
    pathMatch: 'full' 
  }, {
    path: '',
    loadChildren: './components/material.module#MaterialComponentsModule'
  }]
}];

