
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        MapComponent
    ],
     exports: [
        MapComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBaITIGSsvIe-YHHQWp49g6JRk6yJshfF8'
        })
    ],
    providers: []
})
export class MapModule { }
