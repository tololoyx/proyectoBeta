import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticasGeneralesPageRoutingModule } from './estadisticas-generales-routing.module';

import { EstadisticasGeneralesPage } from './estadisticas-generales.page';
import { ComponentsModule } from 'src/app/components/header/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasGeneralesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstadisticasGeneralesPage]
})
export class EstadisticasGeneralesPageModule {}
