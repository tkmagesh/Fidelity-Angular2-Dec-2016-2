import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BugsCollection } from '../services/BugsCollection.service';
import { Bug } from '../models/Bug';

declare var fetch:any;

@Component({
    template : `
     <section class="list">
            <ol>
                <bug-item 
                    *ngFor="let bug of _bugsCollection.list | sort:sortBy:sortOrder " 
                    [data]="bug" 
                    (onToggle)="onBugToggle($event)"
                >
                </bug-item>
            </ol>
            <input type="button" value="Remove Completed" (click)="onRemoveClosedClick()">
        </section>
    `,
    selector : 'bug-list'
})
export class BugListComponent {
    @Input()
    sortBy : string = '';

    @Input()
    sortOrder : boolean = false;


    constructor(private _bugsCollection : BugsCollection){
        
            
    }

    onRemoveClosedClick(){
        this._bugsCollection.removeClosed()
    }

     onBugToggle(bug : Bug){
        this._bugsCollection.toggle(bug);
    }
}