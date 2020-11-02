import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent{
  switchColor: string = "greenyellow";
  switchUpdate: string = "oui";
  switchPadding: string = "60px";

  constructor() {
  }

  updateButton(){
    if (this.switchUpdate = "oui") {
      this.switchColor = "gray";
      console.log("1");
      this.switchUpdate = "non";
      this.switchPadding = "15px";

    } else {
      this.switchColor = "greenyellow";
      console.log("2");
      this.switchUpdate = "oui";
      this.switchPadding = "60px";
    }
    
  }

}
