import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  myMovie:string="Robo";
  imagepath:string="src\assets\rose1.jpg";
  
 @Input() Tit="";
 @Output() changeName = new EventEmitter();     
 
 updateName() 
 { 
  this.changeName.emit();
  } 
 
  constructor() { }

  ngOnInit(): void {
  }

  changeMovie(){
    this.myMovie="Harry potter";
  }

}
