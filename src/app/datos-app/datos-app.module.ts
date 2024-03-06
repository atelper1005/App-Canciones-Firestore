import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosAppPageRoutingModule } from './datos-app-routing.module';

import { DatosAppPage } from './datos-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosAppPageRoutingModule
  ],
  declarations: [DatosAppPage]
})
export class DatosAppPageModule {}
