import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ChangenumbersComponent } from './changenumbers/changenumbers.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student/student-list/student-list.component';
import { ChildComponent } from './child/child.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ChangenumbersComponent,
    StudentListComponent,
    ChildComponent,
    StudentListHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
