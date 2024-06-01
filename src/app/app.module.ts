import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ChangenumbersComponent } from './changenumbers/changenumbers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentListComponent } from './student/student-list/student-list.component';
import { ChildComponent } from './child/child.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentAddHttpComponent } from './student/student-add-http/student-add-http.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { StudentViewHttpComponent } from './student/student-view-http/student-view-http.component';
import { FilterdataPipe } from './pipes/filterdata.pipe';
import { StudentEditHttpComponent } from './student/student-edit-http/student-edit-http.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ChangenumbersComponent,
    StudentListComponent,
    ChildComponent,
    StudentListHttpComponent,
    StudentAddHttpComponent,
    HeaderComponent,
    ErrorComponent,
    StudentViewHttpComponent,
    FilterdataPipe,
    StudentEditHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
