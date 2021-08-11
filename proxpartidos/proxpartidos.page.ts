import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proxpartidos',
  templateUrl: './proxpartidos.page.html',
  styleUrls: ['./proxpartidos.page.scss'],
})
export class ProxpartidosPage implements OnInit {
  lista:Array<any>=[
    {
      hora:"22:00",
      torneo:"Flores Magon",
      equipo1:"Chivas",
      equipo2:"Pumas",
      fecha:"10-08-21"
    },
    {
      hora:"20:00",
      torneo:"Valle de urias",
      equipo1:"Pirañas",
      equipo2:"Cerro",
      fecha:"10-08-21"
    },
    {
      hora:"16:00",
      torneo:"San Joaquin",
      equipo1:"Coca",
      equipo2:"Prendamex",
      fecha:"10-08-21"
    },
    {
      hora:"18:00",
      torneo:"Conchi",
      equipo1:"Flecha",
      equipo2:"Conchi",
      fecha:"10-08-21"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
