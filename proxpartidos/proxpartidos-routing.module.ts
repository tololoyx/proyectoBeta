import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProxpartidosPage } from './proxpartidos.page';

const routes: Routes = [
  {
    path: '',
    component: ProxpartidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProxpartidosPageRoutingModule {}
