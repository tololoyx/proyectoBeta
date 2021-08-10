import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() nombre:string;
  @Input() pais:string;

  constructor(private ModalController: ModalController) { }

  ngOnInit() {
    console.log(this.nombre)
    console.log(this.pais)
  }

  salirSinArgumentos(){
    this.ModalController.dismiss();
  }

  salirConArgumentos(){
    this.ModalController.dismiss({
      nombre: 'Cruz',
      pais: 'España'
    });
  }
}
