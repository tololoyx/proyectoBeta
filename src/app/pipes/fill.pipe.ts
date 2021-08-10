import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {

  transform(arreglo: any[], texto:string='', columna='title'): any[] {

    if(texto==''){
     return arreglo;
   }

   if(!arreglo){
     return arreglo;
   }

   texto=texto.toLocaleLowerCase();

   return arreglo.filter(
     item => item[columna].toLocaleLowerCase().includes(texto)
   );
  }

}
