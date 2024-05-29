import { Component, OnInit } from '@angular/core';
import { stud } from '../student.model';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    empname="";
    sz=50;
    color:string[]=["red","blue","Green"];
    allStudents:stud[]=[
    {
      Id:101,
      studName:"Pratheep",
      studTotalMarks:95,
      studDOB:new Date(2023,5,1),
      studGender:"Male"
    },
    {
      Id:102,
      studName:"Preethi",
      studTotalMarks:45,
      studDOB:new Date(2020,5,1),
      studGender:"Female"
    },
    { 
      Id:103,
      studName:"Nirmal",
      studTotalMarks:25,
      studDOB:new Date(2000,5,1),
      studGender:"Male"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  getGender(gen:string){
   if(gen=='Male')
    return 'red';
  else
  return 'green';
  }
}
