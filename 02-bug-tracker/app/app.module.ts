import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/Sort.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTrackerComponent, TrimTextPipe, SortPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
