import { Component, OnInit, Input } from '@angular/core';
import { StyledMap } from '../map.class';

@Component({
  selector: 'app-features-map',
  templateUrl: './features-map.component.html',
  styleUrls: ['./features-map.component.css']
})
export class FeaturesMapComponent implements OnInit {

  @Input() map: google.maps.Map

  styledMap: StyledMap = {
    diurnal: [
      {elementType: 'geometry', stylers: [{color: '#eceff1'}]},
      {featureType: 'poi', elementType: 'labels', stylers: [{visibility: 'off'}]},
      {featureType: 'administrative', elementType: 'labels', stylers: [{visibility: 'on'}]},
      {featureType: 'road', elementType: 'geometry', stylers: [{color: '#cfd8dc'}]},
      {featureType: 'water', stylers: [{color: '#b0bec5'}]}
    ],
    nocturnal: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  }

  constructor() { }

  ngOnInit() {
    // Fullscreen
    this.initFullscreenControl(this.map)
    // Tipo de Mapa
    this.initMapTypeControl(this.map)
    // Estilização - Mapa Diurno
    this.initStyledMapDayMode(this.map)
  }

  initFullscreenControl(map: google.maps.Map) {
    const elementToSendFullscreen: HTMLElement = document.documentElement
    const fullscreenControl: HTMLElement = document.querySelector('.fullscreen-control')
    fullscreenControl.style.backgroundColor = '#fff'
    fullscreenControl.style.width = '50px'
    fullscreenControl.style.height = '50px'
    fullscreenControl.style.cursor = 'pointer'
    fullscreenControl.style.marginTop = '4%'
    fullscreenControl.style.marginRight = '2%'
    fullscreenControl.style.borderRadius = '10px'
    fullscreenControl.style.boxShadow = '0 6px 6px 0 rgba(0, 0, 0, 0.16)'

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(
      fullscreenControl)

    fullscreenControl.onclick = () => {
      if (this.isFullscreen(elementToSendFullscreen)) {
        this.exitFullscreen()
      } else {
        this.requestFullscreen(elementToSendFullscreen)
      }
    }
  }

  isFullscreen(element: HTMLElement) {
    return (document as any)['fullscreenElement']  === element
  }

  requestFullscreen(element: HTMLElement) {
    element.requestFullscreen()
  }

  exitFullscreen() {
    document.exitFullscreen()
  }

  initMapTypeControl(map: google.maps.Map) {
    const mapTypeToChange = document.getElementById('mapType-control')
    const changeColorStatus = document.getElementById('mapType-control')
    changeColorStatus.style.backgroundColor = '#fff'
    changeColorStatus.style.width = '50px'
    changeColorStatus.style.height = '50px'
    changeColorStatus.style.cursor = 'pointer'
    changeColorStatus.style.right = 'true'
    changeColorStatus.style.marginTop = '1%'
    changeColorStatus.style.marginRight = '2%'
    changeColorStatus.style.borderRadius = '10px'
    changeColorStatus.style.boxShadow = '0 6px 6px 0 rgba(0, 0, 0, 0.16)'
    let currentValue = false

    mapTypeToChange.addEventListener ('click', () => {
      if (!currentValue) {
        map.setMapTypeId('hybrid')
        changeColorStatus.style.backgroundColor = '#43ff9b'
        currentValue = true
      } else {
        map.setMapTypeId('roadmap')
        changeColorStatus.style.backgroundColor = '#fff'
        currentValue = false
      }
    })
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(mapTypeToChange)
  }

  initStyledMapDayMode(map: google.maps.Map) {
    const styledMapToChange = document.getElementById('styledMapDayMode-control')
    const changeColorStatus = document.getElementById('styledMapDayMode-control')
    changeColorStatus.style.backgroundColor = '#fff'
    changeColorStatus.style.width = '50px'
    changeColorStatus.style.height = '50px'
    changeColorStatus.style.cursor = 'pointer'
    changeColorStatus.style.marginTop = '1%'
    changeColorStatus.style.marginRight = '2%'
    changeColorStatus.style.borderRadius = '10px'
    changeColorStatus.style.boxShadow = '0 6px 6px 0 rgba(0, 0, 0, 0.16)'
    let currentValue = false

    styledMapToChange.addEventListener ('click', () => {
      if (!currentValue) {
        map.setOptions({styles: this.styledMap.diurnal})
        changeColorStatus.style.backgroundColor = '#43ff9b'
        currentValue = true
      } else {
        map.setOptions({styles: this.styledMap.nocturnal})
        changeColorStatus.style.backgroundColor = '#fff'
        currentValue = false
      }
    })
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(styledMapToChange)
  }

}
