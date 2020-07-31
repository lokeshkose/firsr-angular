import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

model:any;

  constructor() { }

  ngOnInit(): void {
    this.model =
      [
        {
          price:56,
          kg:67
        }
      ]
  }
  show()
  {
    document.getElementById("div1").style.display="block";
  }
}
