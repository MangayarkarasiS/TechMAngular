import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  myMovie:string="Robo";
  imagepath:string="src\assets\rose1.jpg";
  

  constructor() { }

  ngOnInit(): void {
  }

  changeMovie(){
    this.myMovie="Harry potter";
  }

}
