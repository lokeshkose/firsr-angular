import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parasbox',
  templateUrl: './parasbox.component.html',
  styleUrls: ['./parasbox.component.css']
})
export class ParasboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    document.getElementById("hide").style.display="block";
    document.getElementById("show").style.display="none";
  }
  hide(){
    document.getElementById("hide").style.display="none";
    document.getElementById("show").style.display="block";
  }


}
