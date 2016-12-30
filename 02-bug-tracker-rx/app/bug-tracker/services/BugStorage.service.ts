import { Injectable}        from '@angular/core';
import { Bug }              from '../models/Bug';
import { BugOperations }    from './BugOperations.service';

@Injectable()
export class BugStorage{
    currentBugId : number = 0;
    constructor(private _bugOperations : BugOperations){

    }
    getAll() : Array<Bug>{
        var result = new Array<Bug>();
        for(var i=0; i < window.localStorage.length; i++){
            var key = window.localStorage.key(i);
            var value = window.localStorage.getItem(key);
            var bug = JSON.parse(value);
            this.currentBugId = bug.id > this.currentBugId ? bug.id : this.currentBugId;
            result.push(bug);
        }
        return result;
    }
    addNew(bugname : string) : Bug{
        var newBug = this._bugOperations.createNew(++this.currentBugId, bugname);
        window.localStorage.setItem(newBug.id.toString(), JSON.stringify(newBug));
        return newBug;
    }
    toggle(bug : Bug) : Bug{
        let toggledBug = this._bugOperations.toggle(bug);
        window.localStorage.setItem(toggledBug.id.toString(), JSON.stringify(toggledBug));
        return toggledBug;
    }
    remove(bug : Bug) : void{
        window.localStorage.removeItem(bug.id.toString())
    }
}
