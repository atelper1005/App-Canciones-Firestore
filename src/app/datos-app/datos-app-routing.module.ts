import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosAppPage } from './datos-app.page';

const routes: Routes = [
  {
    path: '',
    component: DatosAppPage
  }, 
  {
    path: 'home',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosAppPageRoutingModule {}
