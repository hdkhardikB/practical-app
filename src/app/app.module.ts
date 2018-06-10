import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Headers, HttpModule, Response, URLSearchParams } from '@angular/http';
import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { WorkerDataService } from './services/worker-data.service';
import { ApiUtilityService } from './services/api-utility.service';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatSelectModule, MatCheckboxModule, MatButtonToggleModule, MatListModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { ModalJobDetailComponent } from './components/modal-job-detail/modal-job-detail.component';
import { NewJobComponent } from './components/new-job/new-job.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ModalJobDetailComponent,
    NewJobComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpModule, FormsModule, ReactiveFormsModule, MatSelectModule, ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    AppRoutingModule, MatButtonModule, MatCheckboxModule, MatListModule, MatButtonToggleModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule, FlexLayoutModule, MatDialogModule
  ],
  entryComponents: [ModalJobDetailComponent],
  providers: [WorkerDataService, ApiUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
