import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './map.service';

@NgModule({
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDJvyS5I9aqJXZJUvztvV8ewQMUHSPhPLE'
        }),
        CommonModule
    ],
    providers: [MapService,CamelizePipe]
})
export class MapModule { }
