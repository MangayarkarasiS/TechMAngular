import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudHttpService } from 'src/app/services/stud-http.service';
import { Book } from '../Book.model';

@Component({
  selector: 'app-student-edit-http',
  templateUrl: './student-edit-http.component.html',
  styleUrls: ['./student-edit-http.component.css']
})
export class StudentEditHttpComponent implements OnInit {
 

  fetchedBook:Book={
    bookid:0,
    booknm:"",
    price:0,
    category:""

  }

myReactiveForm:FormGroup=new FormGroup({
    rsId:new FormControl(),
    rsName:new FormControl('',[Validators.required,Validators.maxLength(25)]),
    rsprice:new FormControl('',Validators.required),
    rscategory:new FormControl('',Validators.required)
   })
  constructor(private studenthttpService:StudHttpService, 
              private activatedRoute:ActivatedRoute,
            private router:Router) { }

  ngOnInit(): void {
    let bookid=this.activatedRoute.snapshot.paramMap.get('bookid');
    if(bookid!=null){
    this.studenthttpService.getABookById(+bookid).subscribe({
      next:(response)=>{this.fetchedBook=response;
        this.myReactiveForm.setValue({
          rsId:this.fetchedBook.bookid,
          rsName:this.fetchedBook.booknm,
          rsprice:this.fetchedBook.price,
          rscategory:this.fetchedBook.category
        })
      },
      error:(err)=>console.log(err)
    })
    }


  }
  editBook(myReactiveForm:any){
    let updateBook:Book={
      bookid:myReactiveForm.value.rsId,
      booknm:myReactiveForm.value.rsName,
      price:myReactiveForm.value.rsprice,
      category:myReactiveForm.value.rscategory
    }
      this.studenthttpService.updateBook(updateBook).subscribe({
        next:(response)=>{this.router.navigate(['studlist'])},
        error:(err)=>console.log(err)
      })





  } 

}
