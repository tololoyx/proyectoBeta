import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProxpartidosPageRoutingModule } from './proxpartidos-routing.module';

import { ProxpartidosPage } from './proxpartidos.page';
import { ComponentsModule } from 'src/app/components/header/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProxpartidosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProxpartidosPage]
})
export class ProxpartidosPageModule {}
