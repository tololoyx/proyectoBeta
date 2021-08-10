import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  name: string = "Alfredo";

  user = {
    email: '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit');
    console.log(this.user);
    console.log(form);
  }

}
