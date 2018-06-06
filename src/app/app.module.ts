import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Headers, HttpModule, Response, URLSearchParams } from '@angular/http';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { WorkerDataService } from './worker-data.service';
import { ApiUtilityService } from './api-utility.service';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule, MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatInputModule, MatToolbarModule, FlexLayoutModule
  ],
  providers: [WorkerDataService, ApiUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
