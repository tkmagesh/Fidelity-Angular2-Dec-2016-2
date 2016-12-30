import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperations } from './BugOperations.service';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

//import { BugStorage } from './BugStorage.service';

declare var fetch:any;

@Injectable()
export class BugsCollection{
    list : Array<Bug> = new Array<Bug>();
    _baseUrl : string = 'http://localhost:8080/bugs';

    constructor(private _bugOperations : BugOperations, private _http : Http){
        this.loadBugs();
    }
    loadBugs(){
        this._http
            .get(this._baseUrl)
            .subscribe(response => this.list = response.json());
    }
     addNew(bugname : string){
        let newBugData = this._bugOperations.createNew(0, bugname)
        this._http
            .post(this._baseUrl, newBugData)
            .subscribe(response => this.list.push(response.json()));
    }

    toggle(bug : Bug){
        let toggledBug = this._bugOperations.toggle(bug);
        this._http
            .put(`${this._baseUrl}/${toggledBug.id}`, toggledBug)
            .subscribe((response) => {
               //this.list = this.list.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
               this.loadBugs();
            });
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