import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ListViewComponent } from './list-view/list-view.component';
import { WorkerDataService } from '../services/worker-data.service';
import { ApiUtilityService } from '../services/api-utility.service';
import { NewJobComponent } from './new-job/new-job.component';
import { ModalJobDetailComponent } from './modal-job-detail/modal-job-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule, NgxSpinnerModule,
    CdkTableModule, ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    WorkerDataService, ApiUtilityService
  ],
  entryComponents: [
    ModalJobDetailComponent
  ],
  declarations: [
    NewJobComponent,
    ListViewComponent, ModalJobDetailComponent
  ]
})

export class MaterialComponentsModule { }
