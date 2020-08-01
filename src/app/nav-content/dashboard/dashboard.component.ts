import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  show(event)
  {
    document.getElementById("show").style.display="block";
    document.getElementById("hide").style.display="none";
  }
  hide(event)
  {
    document.getElementById("show").style.display="none";
    document.getElementById("hide").style.display="block";
  }
}
