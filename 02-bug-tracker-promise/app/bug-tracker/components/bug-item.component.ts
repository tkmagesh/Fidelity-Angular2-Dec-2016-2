import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
    selector : 'bug-item',
    template : `
         <li >
            <span class="bugname" (click)="onBugClick(data)" [ngClass]="{closed : data.isClosed, className : expr}">
                {{data.name | trimText:40}}
            </span>
            <div class="datetime">{{data.createdAt | date:'dd-MMM-yyyy'}}</div>
        
        </li>
    `
})
export class BugItemComponent{

    @Output()
    onToggle : EventEmitter<Bug> = new EventEmitter<Bug>();

    @Input()
    data : Bug ;

    onBugClick(bug : Bug){
        this.onToggle.emit(bug);
    }
}
