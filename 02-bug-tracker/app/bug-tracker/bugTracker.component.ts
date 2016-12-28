import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
    selector : 'bug-tracker',
    template : `
    <section class="content">
        <section class="stats">
            <span class="closed">{{getClosedCount()}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
        <section class="sort">
            <label for="">Order By :</label>
            <input type="text" name="" id="">
            <label for="">Descending :</label>
            <input type="checkbox" name="" id="">
        </section>
        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" #txtBugName>
            <input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
        </section>
        <section class="list">
            <ol>
                <li *ngFor="let bug of bugs">
                    <span class="bugname" (click)="onBugClick(bug)" [ngClass]="{closed : bug.isClosed, className : expr}">
                        {{bug.name | trimText | uppercase}}
                    </span>
                    <div class="datetime">{{bug.createdAt | date:'dd-MMM-yyyy'}}</div>
                    <span>{{bug.isClosed}}</span>
                </li>
               
            </ol>
            <input type="button" value="Remove Completed" (click)="onRemoveClosedClick()">
        </section>
    </section>
    `
})
export class BugTrackerComponent{
    bugs : Array<Bug> = [];

    onAddNewClick(bugname : string){
        let newBug : Bug = {
            name : bugname,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugs.push(newBug);
    }

    onBugClick(bug : Bug){
        bug.isClosed = !bug.isClosed;
    }

    onRemoveClosedClick(){
        for(let i = this.bugs.length-1; i >=0; i--)
            if (this.bugs[i].isClosed)
                this.bugs.splice(i, 1);
    }

    getClosedCount(){
        let result = 0;
        for(var i=0; i < this.bugs.length; i++)
            if (this.bugs[i].isClosed)
                ++result;
        return result;
    }
}