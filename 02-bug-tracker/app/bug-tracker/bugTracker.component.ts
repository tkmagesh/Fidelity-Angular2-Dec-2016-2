import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugStorage } from './services/BugStorage.service';
import { OnInit } from '@angular/core';


@Component({
    selector : 'bug-tracker',
    templateUrl : 'app/bug-tracker/bug-tracker.template.html'
})
export class BugTrackerComponent extends OnInit{
    
    bugs : Array<Bug> = [];

    constructor(private _bugStorage : BugStorage){
        super();
    }
    ngOnInit(){
        this.bugs = this._bugStorage.getAll();
    }

    onNewBugAddEvent(bugname : string){
        let newBug = this._bugStorage.addNew(bugname);
        this.bugs = this.bugs.concat([newBug]);
    }

    onBugClick(bug : Bug){
        this.bugs = this.bugs.map(b => b === bug ? this._bugStorage.toggle(b) : b);
    }

    onRemoveClosedClick(){
        this.bugs.filter(b => b.isClosed ).forEach(this._bugStorage.remove);
        this.bugs = this.bugs.filter(b => !b.isClosed);
    }

   
}