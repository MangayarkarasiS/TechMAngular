import { Injectable } from '@angular/core';
import { stud } from '../student/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudService {
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

  getAllStudents():stud[]{
    return this.allStudents;
  }
}
