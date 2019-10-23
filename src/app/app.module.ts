import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import  { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddReportComponent } from './add-report/add-report.component';
import { MyReportComponent } from './my-report/my-report.component';
import { TeamReportComponent } from './team-report/team-report.component';
import { PassReportDetailsService } from './pass-report-details.service';
import { MyDetailedReportComponent } from './my-detailed-report/my-detailed-report.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgPipesModule} from 'ngx-pipes';
import { GoogleChartsModule } from 'angular-google-charts';
import { AssignTasksComponent } from './assign-tasks/assign-tasks.component';
// import { ModalModule, BsModalRef } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddReportComponent,
    MyReportComponent,
    TeamReportComponent,
    MyDetailedReportComponent,
    AssignTasksComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatBadgeModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModule,
    MatExpansionModule,
    NgPipesModule,
    GoogleChartsModule
  ],
  providers: [PassReportDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
