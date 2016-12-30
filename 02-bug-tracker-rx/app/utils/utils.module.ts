import { NgModule } from '@angular/core';
import { SortPipe } from './pipes/Sort.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';

@NgModule({
    declarations : [SortPipe, TrimTextPipe],
    exports : [SortPipe, TrimTextPipe]
})
export class UtilsModule{

}