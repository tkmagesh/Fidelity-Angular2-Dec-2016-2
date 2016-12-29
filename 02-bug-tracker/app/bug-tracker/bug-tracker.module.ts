import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { UtilsModule }   from '../utils/utils.module';
import { CommonModule }  from '@angular/common';

import { BugTrackerComponent } from './bugTracker.component';
import { BugStatsComponent } from './components/bug-stats.component';
import { BugEditComponent } from './components/bug-edit.component';

import { ClosedCountPipe } from './pipes/closedCount.pipe';

import { BugOperations } from './services/BugOperations.service';
import { BugStorage } from './services/BugStorage.service';

@NgModule({
  imports:      [ FormsModule, UtilsModule, CommonModule ],
  declarations: [ BugTrackerComponent, ClosedCountPipe, BugStatsComponent, BugEditComponent ],
  providers :   [ BugOperations, BugStorage ],
  exports :     [ BugTrackerComponent ]
})
export class BugTrackerModule { }
