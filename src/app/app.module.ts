import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module/angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { SchedulerComponent } from './scheduler/scheduler.component';


import {HttpClientModule} from '@angular/common/http';

import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, RecurrenceEditorModule} from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,    
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ScheduleModule,
    RecurrenceEditorModule,
    
    
    
  ],
  exports: [  ],
  providers: [ MonthAgendaService, AgendaService, DayService, WeekService, WorkWeekService, MonthService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }