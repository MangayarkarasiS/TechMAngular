import { Component, OnInit } from '@angular/core';
import { StudHttpService } from 'src/app/services/stud-http.service';
import { Book } from '../Book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-view-http',
  templateUrl: './student-view-http.component.html',
  styleUrls: ['./student-view-http.component.css']
})
export class StudentViewHttpComponent implements OnInit {
  fetchedBook:Book={
    bookid:0,
    booknm:"",
    price:0,
    category:""

  }
  constructor(private studhttpservice:StudHttpService,
              private activatedRoute:ActivatedRoute,
              private router:Router
  ) { }

  back(){
   this.router.navigate(['studlist']); 
  }

  ngOnInit(): void {
    let bookid=this.activatedRoute.snapshot.paramMap.get('bookid');
    if(bookid!=null)
      {
    this.studhttpservice.getABookById(+bookid).subscribe({
      next:(response)=>{this.fetchedBook=response},
      error:(err)=>console.log(err)
    })
  }
  
  }

}
