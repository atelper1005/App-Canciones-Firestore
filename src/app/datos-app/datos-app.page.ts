import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-datos-app',
  templateUrl: './datos-app.page.html',
  styleUrls: ['./datos-app.page.scss'],
})
export class DatosAppPage implements OnInit {

  map: L.Map;

  constructor() {
    this.map = {} as L.Map;
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.loadMap();
  }

  loadMap() {
    let latitud = 36.6797047;
    let longitud = -5.4470656;
    let zoom = 17;
//    this.map = L.map("mapId").setView([latitud, longitud], zoom).dragging.enable();
    this.map = L.map("mapId").setView([latitud, longitud], zoom);
    this.map.dragging.enable();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(this.map);
    L.marker([latitud,longitud]).addTo(this.map);

        // var markPoint = L.marker([latitud, longitud]);
        // markPoint.bindPopup('<p>Ntra. Sra. de los Remedios - Ubrique.</p>');
        // this.map.addLayer(markPoint);
        
      }

  }

