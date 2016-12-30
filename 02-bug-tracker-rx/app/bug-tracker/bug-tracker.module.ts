import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { UtilsModule }   from '../utils/utils.module';
import { CommonModule }  from '@angular/common';
import { HttpModule }    from '@angular/http';

import { BugTrackerComponent } from './bugTracker.component';
import { BugStatsComponent } from './components/bug-stats.component';
import { BugEditComponent } from './components/bug-edit.component';
import { BugItemComponent } from './components/bug-item.component';
import { BugListComponent } from './components/bug-list.component';

import { ClosedCountPipe } from './pipes/closedCount.pipe';

import { BugOperations } from './services/BugOperations.service';
import { BugStorage } from './services/BugStorage.service';
import { BugsCollection } from './services/BugsCollection.service';

@NgModule({
  imports:      [ FormsModule, UtilsModule, CommonModule, HttpModule ],
  declarations: [ BugTrackerComponent, ClosedCountPipe, BugStatsComponent, BugEditComponent, BugItemComponent, BugListComponent ],
  providers :   [ BugOperations, BugStorage, BugsCollection ],
  exports :     [ BugTrackerComponent ]
})
export class BugTrackerModule { }
