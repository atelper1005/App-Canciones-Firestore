import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import * as L from 'leaflet';

@Component({
  selector: 'app-datos-app',
  templateUrl: './datos-app.page.html',
  styleUrls: ['./datos-app.page.scss'],
})
export class DatosAppPage implements OnInit {

  map: L.Map;

  constructor(private callNumber:CallNumber) {
    this.map = {} as L.Map;
   }

  ngOnInit() {
  }

  callPhone(){
    this.callNumber.callNumber('657368712', true)
    .then(() => console.log('Llamada iniciada'))
    .catch(e => console.log('Error al iniciar la llamada', e));
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
        
      }

  }

