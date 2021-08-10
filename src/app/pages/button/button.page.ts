import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  favourite = false;

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.favourite = !this.favourite;
  }

}
