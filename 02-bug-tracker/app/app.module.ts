import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BugTrackerComponent, TrimTextPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
