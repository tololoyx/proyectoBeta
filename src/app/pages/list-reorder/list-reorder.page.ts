import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  carreras: string[] = ['informatica','biotecnologia','mecatronica',
                        'nanotecnologia','energia'];

  disabledReorder: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event){
    console.log(event);

    const iteMover = this.carreras.splice(event.detail.from,1);
    this.carreras.splice(event.detail.to,0,iteMover[0]);

    event.detail.complete();
    console.log(this.carreras);
  }

}
