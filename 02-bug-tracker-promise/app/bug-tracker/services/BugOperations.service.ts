import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';

@Injectable()
export class BugOperations{
   

    createNew (id : number, bugname : string) : Bug{
        return {
            id : id,
            name : bugname,
            isClosed : false,
            createdAt : new Date()
        };
    }

    toggle ( bug : Bug ) : Bug{
        return {
            id   : bug.id,
            name : bug.name,
            isClosed : !bug.isClosed,
            createdAt : bug.createdAt
        };
    }
}