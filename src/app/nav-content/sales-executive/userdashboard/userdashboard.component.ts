import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

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
