import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';

@Injectable()
export class BugOperations{
    createNew (bugname : string) : Bug{
        return {
             name : bugname,
            isClosed : false,
            createdAt : new Date()
        };
    }

    toggle ( bug : Bug ) : Bug{
        return {
            name : bug.name,
            isClosed : !bug.isClosed,
            createdAt : bug.createdAt
        };
    }
}