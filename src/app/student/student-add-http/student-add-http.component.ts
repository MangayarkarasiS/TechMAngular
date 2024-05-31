import { Component, OnInit } from '@angular/core';
import { StudHttpService } from 'src/app/services/stud-http.service';
import { Book } from '../Book.model';

@Component({
  selector: 'app-student-add-http',
  templateUrl: './student-add-http.component.html',
  styleUrls: ['./student-add-http.component.css']
})
export class StudentAddHttpComponent implements OnInit {

  constructor(private studHttpService:StudHttpService) { }
 allBooks:Book[]=[];
  ngOnInit(): void {
  }
 
  addBook(myForm:any){
    //construct a student object and assign the form data to it
       let newBook:Book={
         bookid:0,
         booknm:myForm.value.BookName,
         price:myForm.value.price,
         category:myForm.value.BookCat,
         
       }
       this.studHttpService.addBooks(newBook).subscribe({
        next:(response)=>{console.log("Book Added")},
        error:(err)=>{console.log(err)}
      })

 
}
}