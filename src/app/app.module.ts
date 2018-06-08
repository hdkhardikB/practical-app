import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Headers, HttpModule, Response, URLSearchParams } from '@angular/http';
import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { WorkerDataService } from './worker-data.service';
import { ApiUtilityService } from './api-utility.service';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatInputModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { ModalJobDetailComponent } from './components/modal-job-detail/modal-job-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ModalJobDetailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule, MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatInputModule, MatToolbarModule, FlexLayoutModule, MatDialogModule
  ],
  entryComponents: [ModalJobDetailComponent],
  providers: [WorkerDataService, ApiUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
