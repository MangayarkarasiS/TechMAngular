import { Component, OnInit } from '@angular/core';
import { stud } from '../student.model';
import { StudService } from 'src/app/services/stud.service';

@Component({
  selector: 'app-student-list',
  templateUrl:'./student-list.component.html', 
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    empname="TechM";
    filterValue="";
    sz=50;
    color:string[]=["red","blue","Green"];
    allStudents:stud[]=[];

     

  constructor(private studservice:StudService ) { 
  
  }

  ngOnInit():void {
    this.allStudents=this.studservice.getAllStudents();
      
  }
  getGender(gen:string){
   if(gen=='Male')
    return 'red';
  else
  return 'green';
  }
}
