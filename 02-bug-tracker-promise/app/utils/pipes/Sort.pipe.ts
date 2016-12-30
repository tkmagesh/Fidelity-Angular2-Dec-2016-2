import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    transform(data : Array<any>, sortBy : string, descending : boolean = false)  : Array<any>{
        if (!sortBy) return data; 
        let comparer : IComparer = getComparer(sortBy);
        if (descending){
            comparer = getDescending(comparer);
        }
        return data.sort(comparer);
    }
}

interface IComparer{
    (item1 : any, item2: any) : number
}

function getDescending(comparer : IComparer) : IComparer{
    return function(item1:any, item2:any) : number{
        var result = comparer(item1, item2);
        return result * -1;
    }
}

function getComparer(attrName : string): IComparer {
    if (!attrName) return () => 0;
    return function(item1 : any, item2 : any) : number {
        if (item1[attrName] < item2[attrName])
            return -1;
        if (item1[attrName] === item2[attrName])
            return 0;
        return 1;
    }
}