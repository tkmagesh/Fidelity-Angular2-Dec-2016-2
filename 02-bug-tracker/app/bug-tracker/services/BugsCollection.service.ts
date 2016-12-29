import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorage } from './BugStorage.service';

@Injectable()
export class BugsCollection{
    list : Array<Bug> = new Array<Bug>();

    constructor(private _bugStorage : BugStorage){
        this.list = this._bugStorage.getAll();
    }

     addNew(bugname : string){
        let newBug = this._bugStorage.addNew(bugname);
        this.list = this.list.concat([newBug]);
    }

    toggle(bug : Bug){
        this.list = this.list.map(b => b === bug ? this._bugStorage.toggle(b) : b);
    }

    removeClosed(){
        this.list.filter(b => b.isClosed ).forEach(this._bugStorage.remove);
        this.list = this.list.filter(b => !b.isClosed);
    }
}