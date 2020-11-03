import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seating-chart',
  templateUrl: './seating-chart.component.html',
  styleUrls: ['./seating-chart.component.css']
})
export class SeatingChartComponent implements OnInit {

  dummyData = [
    {"seat_sold_ind": 1, "seat_row": "A", "seat_num" : 1, "username" : "john doe"},
    {"seat_sold_ind": 0, "seat_row": "A", "seat_num" : 2, "username" : ""},
    {"seat_sold_ind": 1, "seat_row": "A", "seat_num" : 3, "username" : "mister T"},
    {"seat_sold_ind": 0, "seat_row": "A", "seat_num" : 4, "username" : ""},
    {"seat_sold_ind": 1, "seat_row": "B", "seat_num" : 1, "username" : "PEE WEE"},
    {"seat_sold_ind": 0, "seat_row": "B", "seat_num" : 2, "username" : ""},
    {"seat_sold_ind": 0, "seat_row": "B", "seat_num" : 3, "username" : ""},
    {"seat_sold_ind": 0, "seat_row": "C", "seat_num" : 1, "username" : ""},
    {"seat_sold_ind": 1, "seat_row": "D", "seat_num" : 2, "username" : "Cris"},
    {"seat_sold_ind": 0, "seat_row": "D", "seat_num" : 1, "username" : ""}
];

  // using Set to parse data out from the dummy data
  // https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
  rowsArray = [...new Set(this.dummyData.map(item=>item.seat_row))];
  
  
  constructor() { }

  ngOnInit(): void {
   console.log(this.rowsArray);

  }

}
