import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  //Coordenadas do limite do undo
  worldCoords = [
    new google.maps.LatLng(-85.1054596961173, -180),
    new google.maps.LatLng(85.1054596961173, -180),
    new google.maps.LatLng(85.1054596961173, 180),
    new google.maps.LatLng(-85.1054596961173, 180),
    new google.maps.LatLng(-85.1054596961173, 0)
  ]

  //Coordenadas do limite da cidade de Goiânia
  goianiaBordCoords = [
    new google.maps.LatLng(-16.4647417917, -49.1760994260),
    new google.maps.LatLng(-16.4644102466, -49.1856070806),
    new google.maps.LatLng(-16.4596268515, -49.1915789068),
    new google.maps.LatLng(-16.4532217828, -49.2145171148),
    new google.maps.LatLng(-16.4667040101, -49.2237404524),
    new google.maps.LatLng(-16.4658463746, -49.2272742691),
    new google.maps.LatLng(-16.4703465128, -49.2294411439),
    new google.maps.LatLng(-16.4710430065, -49.2346024851),
    new google.maps.LatLng(-16.4800253517, -49.2373529928),
    new google.maps.LatLng(-16.4833286060, -49.2448322084),
    new google.maps.LatLng(-16.4912134035, -49.2487708171),
    new google.maps.LatLng(-16.4898127352, -49.2525712087),
    new google.maps.LatLng(-16.5004455557, -49.2564271339),
    new google.maps.LatLng(-16.5141263063, -49.2652132038),
    new google.maps.LatLng(-16.5190162536, -49.2757118154),
    new google.maps.LatLng(-16.5269663051, -49.2777941502),
    new google.maps.LatLng(-16.5310056394, -49.2848276032),
    new google.maps.LatLng(-16.5242298484, -49.2883581742),
    new google.maps.LatLng(-16.5288290877, -49.3072672592),
    new google.maps.LatLng(-16.5284031262, -49.3118240487),
    new google.maps.LatLng(-16.5456176235, -49.3226593780),
    new google.maps.LatLng(-16.5475907291, -49.3278877134),
    new google.maps.LatLng(-16.5553834633, -49.3295411241),
    new google.maps.LatLng(-16.5697094904, -49.3301577141),
    new google.maps.LatLng(-16.5687452550, -49.3503575677),
    new google.maps.LatLng(-16.5597420531, -49.3584650606),
    new google.maps.LatLng(-16.5593372424, -49.3770805182),
    new google.maps.LatLng(-16.5667591473, -49.3842949006),
    new google.maps.LatLng(-16.5705061100, -49.3950716674),
    new google.maps.LatLng(-16.5740002982, -49.4010992577),
    new google.maps.LatLng(-16.5887688499, -49.3964397889),
    new google.maps.LatLng(-16.5881279630, -49.3907983840),
    new google.maps.LatLng(-16.5905588013, -49.3884907795),
    new google.maps.LatLng(-16.5928949879, -49.3920559089),
    new google.maps.LatLng(-16.5929302594, -49.3886759685),
    new google.maps.LatLng(-16.5957412250, -49.3892162213),
    new google.maps.LatLng(-16.6133934337, -49.3909747682),
    new google.maps.LatLng(-16.6154873831, -49.3929552165),
    new google.maps.LatLng(-16.6231291246, -49.3810230513),
    new google.maps.LatLng(-16.6289690548, -49.3794580058),
    new google.maps.LatLng(-16.6339771549, -49.3837405217),
    new google.maps.LatLng(-16.6367878913, -49.3878067917),
    new google.maps.LatLng(-16.6465972821, -49.3887108835),
    new google.maps.LatLng(-16.6422069981, -49.3885976386),
    new google.maps.LatLng(-16.6440304066, -49.3959796238),
    new google.maps.LatLng(-16.6431999958, -49.4032976227),
    new google.maps.LatLng(-16.6459800276, -49.4035781203),
    new google.maps.LatLng(-16.6495633503, -49.4140003146),
    new google.maps.LatLng(-16.6635113347, -49.4298463247),
    new google.maps.LatLng(-16.6694145775, -49.4421295831),
    new google.maps.LatLng(-16.6792538566, -49.4384648417),
    new google.maps.LatLng(-16.6880678690, -49.4424088785),
    new google.maps.LatLng(-16.6951144717, -49.4394945722),
    new google.maps.LatLng(-16.7160136757, -49.4464623236),
    new google.maps.LatLng(-16.7201153716, -49.4292377663),
    new google.maps.LatLng(-16.7323374796, -49.4223807596),
    new google.maps.LatLng(-16.7350353719, -49.4148316764),
    new google.maps.LatLng(-16.7404731638, -49.4116188754),
    new google.maps.LatLng(-16.7731440188, -49.4008008778),
    new google.maps.LatLng(-16.7837874913, -49.4003829191),
    new google.maps.LatLng(-16.7963665830, -49.3902259792),
    new google.maps.LatLng(-16.8117572383, -49.3869078290),
    new google.maps.LatLng(-16.8234629397, -49.3905177983),
    new google.maps.LatLng(-16.8315112833, -49.3837184541),
    new google.maps.LatLng(-16.8178089108, -49.3650258956),
    new google.maps.LatLng(-16.8047214237, -49.3614436491),
    new google.maps.LatLng(-16.7930730112, -49.3554141806),
    new google.maps.LatLng(-16.7643834801, -49.3485020491),
    new google.maps.LatLng(-16.7606310111, -49.3504162962),
    new google.maps.LatLng(-16.7552847129, -49.3477732874),
    new google.maps.LatLng(-16.7530888061, -49.3379304529),
    new google.maps.LatLng(-16.7478338026, -49.3359422818),
    new google.maps.LatLng(-16.7504032086, -49.3332800681),
    new google.maps.LatLng(-16.7505606612, -49.3121404583),
    new google.maps.LatLng(-16.7467501385, -49.3028069539),
    new google.maps.LatLng(-16.7461840829, -49.2847671636),
    new google.maps.LatLng(-16.7369275768, -49.2671892623),
    new google.maps.LatLng(-16.7267357441, -49.2616979526),
    new google.maps.LatLng(-16.7325957662, -49.2572378859),
    new google.maps.LatLng(-16.7335315020, -49.2431525199),
    new google.maps.LatLng(-16.7387323523, -49.2202722038),
    new google.maps.LatLng(-16.7553076032, -49.1982051330),
    new google.maps.LatLng(-16.7608849087, -49.1924423937),
    new google.maps.LatLng(-16.7679646172, -49.1851261615),
    new google.maps.LatLng(-16.7813709708, -49.1824740270),
    new google.maps.LatLng(-16.7899581729, -49.1597925371),
    new google.maps.LatLng(-16.7750006110, -49.1535762253),
    new google.maps.LatLng(-16.7649798503, -49.1592704061),
    new google.maps.LatLng(-16.7564823716, -49.1538024044),
    new google.maps.LatLng(-16.7492097955, -49.1544371734),
    new google.maps.LatLng(-16.7504605238, -49.1443767886),
    new google.maps.LatLng(-16.7459716882, -49.1408199956),
    new google.maps.LatLng(-16.7428715868, -49.1489598818),
    new google.maps.LatLng(-16.7413876781, -49.1436888751),
    new google.maps.LatLng(-16.7299909554, -49.1547937796),
    new google.maps.LatLng(-16.7202124114, -49.1554071364),
    new google.maps.LatLng(-16.7143729090, -49.1580770386),
    new google.maps.LatLng(-16.7153344765, -49.1660441578),
    new google.maps.LatLng(-16.7235089816, -49.1689613116),
    new google.maps.LatLng(-16.7247414416, -49.1729823927),
    new google.maps.LatLng(-16.7245315050, -49.1756900797),
    new google.maps.LatLng(-16.7108276518, -49.1768231886),
    new google.maps.LatLng(-16.7115999252, -49.1806286677),
    new google.maps.LatLng(-16.7047033719, -49.1844365204),
    new google.maps.LatLng(-16.7015577557, -49.1904392698),
    new google.maps.LatLng(-16.6939439591, -49.1946461414),
    new google.maps.LatLng(-16.6921754610, -49.1960118731),
    new google.maps.LatLng(-16.6843352994, -49.1886926177),
    new google.maps.LatLng(-16.6596117263, -49.1738495414),
    new google.maps.LatLng(-16.6576945828, -49.1724536566),
    new google.maps.LatLng(-16.6533791983, -49.1684982197),
    new google.maps.LatLng(-16.6561404643, -49.1626030803),
    new google.maps.LatLng(-16.6493013094, -49.1509402766),
    new google.maps.LatLng(-16.6430453325, -49.1411621451),
    new google.maps.LatLng(-16.6328921339, -49.1344430314),
    new google.maps.LatLng(-16.6230736843, -49.1258222287),
    new google.maps.LatLng(-16.6159450419, -49.1096285505),
    new google.maps.LatLng(-16.5930394156, -49.0775757432),
    new google.maps.LatLng(-16.5908401896, -49.0962412413),
    new google.maps.LatLng(-16.5670549470, -49.0953501061),
    new google.maps.LatLng(-16.5613763202, -49.1049347173),
    new google.maps.LatLng(-16.5636722441, -49.1195994627),
    new google.maps.LatLng(-16.5696758146, -49.1242372665),
    new google.maps.LatLng(-16.5721971374, -49.1207151519),
    new google.maps.LatLng(-16.5748585022, -49.1223819176),
    new google.maps.LatLng(-16.5784207146, -49.1392382705),
    new google.maps.LatLng(-16.5734221983, -49.1478275540),
    new google.maps.LatLng(-16.5779521674, -49.1671897287),
    new google.maps.LatLng(-16.5621516255, -49.1658218701),
    new google.maps.LatLng(-16.5528868542, -49.1754353530),
    new google.maps.LatLng(-16.5486687713, -49.1872913528),
    new google.maps.LatLng(-16.5403875698, -49.1830759433),
    new google.maps.LatLng(-16.5379867424, -49.1762377167),
    new google.maps.LatLng(-16.5288680317, -49.1806064927),
    new google.maps.LatLng(-16.5168468486, -49.1953236830),
    new google.maps.LatLng(-16.4931838617, -49.1960236735),
    new google.maps.LatLng(-16.4879808646, -49.1926026053),
    new google.maps.LatLng(-16.4820163380, -49.1774696604),
    new google.maps.LatLng(-16.4764789596, -49.1731862753),
    new google.maps.LatLng(-16.4714959390, -49.1767188505),
    new google.maps.LatLng(-16.4647417917, -49.1760994260)
  ]

  //Configurações do mapa
  mapProp: google.maps.MapOptions = {
    center: new google.maps.LatLng(-16.680519, -49.256130),
    zoom: 12,
    styles: [
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
    ],
    disableDefaultUI: true,
    disableDoubleClickZoom: false,
    clickableIcons: false,
    scaleControl: true,
    scrollwheel: true,
    rotateControl: true
  };

  constructor() { }
}
