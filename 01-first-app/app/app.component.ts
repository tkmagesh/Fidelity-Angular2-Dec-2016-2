import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <label>Name : </label>
      <input type="text" [(ngModel)]="name" />
      
    </div>
    <h1>Hello {{name}}</h1>
    <greet></greet>`,
}) 
export class AppComponent  { 
  name = 'Magesh';

 
}
