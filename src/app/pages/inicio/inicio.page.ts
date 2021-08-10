import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: Observable<Components[]>

  constructor(private menu: MenuController, 
              private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  mostrarmenu(){
    this.menu.open('first')
  }
}