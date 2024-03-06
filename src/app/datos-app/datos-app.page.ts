import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-datos-app',
  templateUrl: './datos-app.page.html',
  styleUrls: ['./datos-app.page.scss'],
})
export class DatosAppPage implements OnInit {

  map: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.loadMap();
  }

  loadMap() {
    let latitud = 36.6797047;
    let longitud = -5.4470656;
    let zoom = 17;
    this.map = L.map("mapId").setView([latitud, longitud], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(this.map);

        const markPoint = L.marker([latitud, longitud]);
        markPoint.bindPopup('<p>Ntra. Sra. de los Remedios - Ubrique.</p>');
        this.map.addLayer(markPoint);
        this.map.dragging.enable();
      }

  }

