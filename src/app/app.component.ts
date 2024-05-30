import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechMAng';
   
  emptitle='HR';

  onchangeTitle(){
    this.emptitle="Admin";
  }

 
   onchangeName()
   {
    this.title='MoifiedTEchMANG';
   }
}
