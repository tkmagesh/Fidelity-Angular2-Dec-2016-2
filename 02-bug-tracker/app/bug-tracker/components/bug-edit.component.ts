import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug :</label>
            <input type="text" #txtBugName>
            <input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
        </section>
    `
})
export class BugEditComponent{
    @Output()
    onNewBug : EventEmitter<string> = new EventEmitter<string>();

    onAddNewClick(bugname : string){
        this.onNewBug.emit(bugname);
    }
}