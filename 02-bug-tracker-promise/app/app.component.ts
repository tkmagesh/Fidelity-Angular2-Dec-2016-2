import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Bug Tracker</h1>
    <hr>
    <bug-tracker></bug-tracker>
  `,
})
export class AppComponent  { name = 'Angular'; }
