import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard1',
  templateUrl: './userdashboard1.component.html',
  styleUrls: ['./userdashboard1.component.css']
})
export class Userdashboard1Component implements OnInit {

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
