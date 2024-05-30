import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-changenumbers',
  templateUrl: './changenumbers.component.html',
  styleUrls: ['./changenumbers.component.css']
})
export class ChangenumbersComponent implements OnInit {

   age:number=10;
   

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
   this.age++;
  }
  decrement(){
    this.age--;
  }

}
