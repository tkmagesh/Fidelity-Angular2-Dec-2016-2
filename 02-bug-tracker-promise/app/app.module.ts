import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BugTrackerModule } from './bug-tracker/bug-tracker.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, BugTrackerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
