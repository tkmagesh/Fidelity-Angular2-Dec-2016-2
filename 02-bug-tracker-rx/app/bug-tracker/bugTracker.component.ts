import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugsCollection} from './services/BugsCollection.service';
import { OnInit } from '@angular/core';



@Component({
    selector : 'bug-tracker',
    templateUrl : 'app/bug-tracker/bug-tracker.template.html'
})
export class BugTrackerComponent extends OnInit{
   constructor(private _bugsCollection : BugsCollection){
        super();
    }
    ngOnInit(){
        
    }

    onNewBugAddEvent(bugname : string){
        this._bugsCollection.addNew(bugname);
    }

   

    

   
}