import { Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { NewJobComponent } from './new-job/new-job.component';

export const MaterialRoutes: Routes = [
{ path: 'jobs', component: ListViewComponent }, { path: 'new', component: NewJobComponent }
];
