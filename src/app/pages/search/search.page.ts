import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
albumes:any[]=[];
textobuscar:string='';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(data =>{
      //console.log(data);
      this.albumes=data;
    })
  }


  oneSearchChange(ev){
    console.log(ev)
    this.textobuscar=ev.detail.value;
  }

}