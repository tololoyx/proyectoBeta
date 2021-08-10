import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasGeneralesPage } from './estadisticas-generales.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasGeneralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasGeneralesPageRoutingModule {}
