import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UtilsModule }   from './utils/utils.module';

import { AppComponent }  from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

import { BugOperations } from './bug-tracker/services/BugOperations.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, UtilsModule ],
  declarations: [ AppComponent, BugTrackerComponent, ClosedCountPipe ],
  bootstrap:    [ AppComponent ],
  providers :   [ BugOperations ]
})
export class AppModule { }
