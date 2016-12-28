import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/Sort.pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

import { BugOperations } from './bug-tracker/services/BugOperations.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTrackerComponent, TrimTextPipe, SortPipe, ClosedCountPipe ],
  bootstrap:    [ AppComponent ],
  providers :   [ BugOperations ]
})
export class AppModule { }
