import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log(event);

    //Simular tiempo de carga
    setTimeout (() => {
      const newArray = Array(20);
      this.data.push(...newArray);

      if(this.data.length > 80) {
        event.target.disabled=true;
      }

      event.target.complete();
    },1000)
  }

}
