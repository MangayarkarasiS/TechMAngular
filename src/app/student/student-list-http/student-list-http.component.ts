import { Component, OnInit } from '@angular/core';
import { StudHttpService } from 'src/app/services/stud-http.service';
import { Book } from '../Book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
 allBooks:Book[]=[];

  constructor(private studhttp:StudHttpService,
              private router:Router) { }
  
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
   filterValue="";
  ngOnInit(): void {
   this.loaddata(); 
  }
  editBook(bookid:number){
   this.router.navigate(['student-edit-http',bookid]);
  }
  viewBook(bookid:number){
     this.router.navigate(['student-view-http',bookid]);
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
