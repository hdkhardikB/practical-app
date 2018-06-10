import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListViewComponent } from './components/list-view/list-view.component';
import { NewJobComponent } from './components/new-job/new-job.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: ListViewComponent },
  { path: 'new', component: NewJobComponent }
  //   { path: 'detail/:id', component: HeroDetailComponent },
  //   { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/