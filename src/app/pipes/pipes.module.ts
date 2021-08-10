import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillPipe } from './fill.pipe';



@NgModule({
  declarations: [
    FillPipe
  ],
  exports: [
    FillPipe
  ]
})
export class PipesModule { }
