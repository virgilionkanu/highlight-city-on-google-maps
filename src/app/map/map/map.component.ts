import {} from 'googlemaps';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('mapRef') mapElement: ElementRef;
  map: google.maps.Map;

  constructor(
    private mapService: MapService
  ){}

  ngOnInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapService.mapProp);

    //Construção do polígono
    const goianiaLatLng = new google.maps.Polygon({
      paths: [this.mapService.worldCoords, this.mapService.goianiaBordCoords],
      strokeColor: '#E3B933',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#E3B933',
      fillOpacity: 0.35
    })
    goianiaLatLng.setMap(this.map)
  }

}
