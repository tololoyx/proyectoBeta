import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async MostrarModal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps : {
        nombre: 'Jose',
        pais: 'Mexico'
      }
    });
    await modal.present();

    //const resp = await modal.onDidDismiss();
    //console.log(resp);

    const {data} = await modal.onDidDismiss();
    console.log(data);
  }

}
