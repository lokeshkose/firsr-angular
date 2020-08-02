import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboardsm',
  templateUrl: './userdashboardsm.component.html',
  styleUrls: ['./userdashboardsm.component.css']
})
export class UserdashboardsmComponent implements OnInit {

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
