import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  pocentaje : number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(ev){
    console.log(ev.detail.value)
    this.pocentaje = ev.detail.value / 100;
  }

}
