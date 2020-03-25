import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { FeaturesMapComponent } from './features-map/features-map.component';

@NgModule({
  declarations: [
    MapComponent,
    FeaturesMapComponent,
    PageNotFoundComponent
  ],
  entryComponents: [
    MapComponent,
    FeaturesMapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
