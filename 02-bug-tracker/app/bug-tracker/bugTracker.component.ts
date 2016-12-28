import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperations } from './services/BugOperations.service';

@Component({
    selector : 'bug-tracker',
    template : `
    <section class="content">
        <section class="stats">
            <span class="closed">{{ bugs | closedCount }}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
        <section class="sort">
            <label for="">Order By :</label>
            <input type="text" [(ngModel)]="bugSort">
            <label for="">Descending :</label>
            <input type="checkbox" [(ngModel)]="bugSortDescending">
        </section>
        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" #txtBugName>
            <input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
        </section>
        <section class="list">
            <ol>
                <li *ngFor="let bug of bugs | sort:bugSort:bugSortDescending">
                    <span class="bugname" (click)="onBugClick(bug)" [ngClass]="{closed : bug.isClosed, className : expr}">
                        {{bug.name | trimText:40}}
                    </span>
                    <div class="datetime">{{bug.createdAt | date:'dd-MMM-yyyy'}}</div>
                  
                </li>
               
            </ol>
            <input type="button" value="Remove Completed" (click)="onRemoveClosedClick()">
        </section>
    </section>
    `
})
export class BugTrackerComponent{
    
    bugs : Array<Bug> = [
        {name : 'User actions not recognized', isClosed : false, createdAt : new Date()},
        {name : 'Zero balance displayed', isClosed : true, createdAt : new Date()},
        {name : 'Server communication failure', isClosed : false, createdAt : new Date()},
    ];

    constructor(private _bugOperations : BugOperations){

    }
    onAddNewClick(bugname : string){
        let newBug = this._bugOperations.createNew(bugname);
        this.bugs = this.bugs.concat([newBug]);
    }

    onBugClick(bug : Bug){
        this.bugs = this.bugs.map(b => b === bug ? this._bugOperations.toggle(b) : b);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(b => !b.isClosed);
    }

   
}