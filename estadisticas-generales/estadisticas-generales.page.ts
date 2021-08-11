import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas-generales',
  templateUrl: './estadisticas-generales.page.html',
  styleUrls: ['./estadisticas-generales.page.scss'],
})
export class EstadisticasGeneralesPage implements OnInit {
  lista:Array<any>=[
    /*{
      posicion:"POS",
      club:"CLB",
      partidosJugados:"PJ",
      partidosGanados:"PG",
      partidosEmpatados:"PE",
      partidosPerdidos:"PP",
      golesAfavor:"GF",
      golesEncontra:"GC",
      diferenciaDegoles:"DG",
      puntos:"PTS"
    },*/
    {
      posicion:"1",
      club:"America",
      partidosJugados:"12",
      partidosGanados:"07",
      partidosEmpatados:"01",
      partidosPerdidos:"04",
      golesAfavor:"22",
      golesEncontra:"08",
      diferenciaDegoles:"+14",
      puntos:"22"
    },
    {
      posicion:"28",
      club:"Pumas",
      partidosJugados:"12",
      partidosGanados:"06",
      partidosEmpatados:"00",
      partidosPerdidos:"06",
      golesAfavor:"20",
      golesEncontra:"15",
      diferenciaDegoles:"+5",
      puntos:"18"
    },
    {
      posicion:"3",
      club:"Guadalajara",
      partidosJugados:"12",
      partidosGanados:"04",
      partidosEmpatados:"04",
      partidosPerdidos:"04",
      golesAfavor:"16",
      golesEncontra:"07",
      diferenciaDegoles:"+9",
      puntos:"16"
    },
    {
      posicion:"4",
      club:"Cruz Azul",
      partidosJugados:"12",
      partidosGanados:"05",
      partidosEmpatados:"01",
      partidosPerdidos:"06",
      golesAfavor:"17",
      golesEncontra:"05",
      diferenciaDegoles:"+12",
      puntos:"16"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
