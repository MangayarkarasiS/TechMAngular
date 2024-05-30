import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../student/Book.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudHttpService {
 
   baseUrl:string="https://localhost:7290/api/Books";

   bookidurl:string="https://localhost:7290/api/Books/GetBookById";
  constructor(private httpClient:HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.baseUrl);
  }

  getAllBookById(id:number):Observable<Book>{
    return this.httpClient.get<Book>(this.bookidurl+'/'+id);
  }

    deleteBook(bookid:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+bookid);
  }

  }

