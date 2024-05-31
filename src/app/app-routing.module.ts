import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ChangenumbersComponent } from './changenumbers/changenumbers.component';
import { StudentAddHttpComponent } from './student/student-add-http/student-add-http.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { ErrorComponent } from './error/error.component';
import { StudentViewHttpComponent } from './student/student-view-http/student-view-http.component';

const routes: Routes = [
  {path:'changenumbers',component:ChangenumbersComponent},
  {path:'counter',component:CounterComponent},
  {path:'studadd',component:StudentAddHttpComponent},
  {path:'studlist',component:StudentListHttpComponent},
  {path:'student-view-http/:bookid',component:StudentViewHttpComponent},
  {path:'',redirectTo:'changenumbers',pathMatch:'full'},
  {path:'**',component:ErrorComponent}

  
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
