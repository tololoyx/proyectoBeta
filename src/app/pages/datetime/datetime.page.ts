import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  bornDate: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

  customPickerOptions = {
    
    buttons: [
      {
        text: 'Hello',
        handler:(event) => {
          console.log(event)
        }
      },
      {
        text: 'World',
        handler:(event) => {
          console.log(event)
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  changeDate(event) {
    console.log(new Date(event.detail.value));
  }

}
