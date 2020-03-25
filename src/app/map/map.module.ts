import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    MapComponent, 
    PageNotFoundComponent
  ],
  entryComponents: [MapComponent],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
