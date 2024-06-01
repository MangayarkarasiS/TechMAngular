import { Pipe, PipeTransform } from '@angular/core';
import { stud } from '../student/student.model';
import { Book } from '../student/Book.model';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

 /* transform(value: stud[], ...args: string[]): stud[] {     
    if(value.length==0 || args[0]=='') return value;
    return value.filter((eachStudent)=>eachStudent.studGender.toLowerCase()==args[0].toLowerCase())
     
  }*/
  transform(value: Book[], ...args: string[]): Book[] {     
    if(value.length==0 || args[0]=='') return value;
    return value.filter((eachBook)=>eachBook.category.toLowerCase()==args[0].toLowerCase())
     
  }
}
