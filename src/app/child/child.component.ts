import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() desig="";
 @Output() changename=new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
  
  updatetitle(){
   this.changename.emit();
  }
}
