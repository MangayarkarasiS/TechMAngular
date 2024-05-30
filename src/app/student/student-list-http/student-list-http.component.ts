import { Component, OnInit } from '@angular/core';
import { StudHttpService } from 'src/app/services/stud-http.service';
import { Book } from '../Book.model';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
 allBooks:Book[]=[];

  constructor(private studhttp:StudHttpService) { }
  
  loaddata(){
    this.studhttp.getAllBooks().subscribe({
      next:(response)=>{
        this.allBooks=response;
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
   
  ngOnInit(): void {
   this.loaddata(); 
  }



  deleteBook(bookid:number){
    this.studhttp.deleteBook(bookid).subscribe({
      next:(response)=>{
           this.loaddata();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
