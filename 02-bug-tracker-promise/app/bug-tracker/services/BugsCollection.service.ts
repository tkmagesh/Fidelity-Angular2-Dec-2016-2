import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperations } from './BugOperations.service';
//import { BugStorage } from './BugStorage.service';

declare var fetch:any;

@Injectable()
export class BugsCollection{
    list : Array<Bug> = new Array<Bug>();
    _baseUrl : string = 'http://localhost:8080/bugs';

    constructor(private _bugOperations : BugOperations){
        this.loadBugs();
    }
    loadBugs(){
        fetch(this._baseUrl)
            .then((response:any) => response.json())
            .then((bugs : Array<Bug>) => this.list = bugs);
    }
     addNew(bugname : string){
        let newBugData = this._bugOperations.createNew(0, bugname)
        fetch(this._baseUrl, {
            headers : {
                'content-type' : 'application/json'
            },
            method : 'POST',
            body : JSON.stringify(newBugData)
        })
        .then((response : any) => response.json())
        .then((newBug : Bug) => this.list.push(newBug));
    }

    toggle(bug : Bug){
        let toggledBug = this._bugOperations.toggle(bug);
        fetch(this._baseUrl + `/${bug.id}`, {
            headers : {
                'content-type' : 'application/json'
            },
            method : 'PUT',
            body : JSON.stringify(toggledBug)
        })
        .then(this.loadBugs);
    }

    removeClosed(){
        let removePromises : Array<Promise<any>>= new Array<Promise<any>>();
        this.list.filter(b => b.isClosed ).forEach((bugToRemove) => {
            let removePromsie = fetch(this._baseUrl + `/${bugToRemove.id}`, {
                headers : {
                    'content-type' : 'application/json'
                },
                method : 'DELETE'
            });
            removePromises.push(removePromsie);
        });
        Promise.all(removePromises)
            .then(this.loadBugs);
    }
}