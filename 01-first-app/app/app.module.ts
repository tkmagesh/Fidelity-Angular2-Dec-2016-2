import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent }  from './app.component';
import { Greeter } from './greeter/greeter.component';
import { SalaryCalculator } from './salaryCalculator/salaryCalculator.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule],
  declarations: [ AppComponent, Greeter, SalaryCalculator ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
