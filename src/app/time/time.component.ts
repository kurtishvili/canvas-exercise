import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  date: Date = new Date()

  cityName: string;
  selectedCity: string = "Select"

  cities = [
    { id: 1, value: 'London', GMT: 4 },
    { id: 2, value: 'New Yourk', GMT: 3 },
    { id: 3, value: 'Tbilisi' }
  ]
  constructor() { }


  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();

    }, 1000);
  }

  change(){
    
  }




}
