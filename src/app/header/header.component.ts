import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  title: string = "Header component";
  altText : string= "Photo d'un loup";
  srcPath : string = "https://france3-regions.francetvinfo.fr/image/-Kvvx7U_RGF4WmdtOG-_xVPSXcw/930x620/regions/2020/06/09/5edf9ea708eb3_loup_10-4621851.jpg";
  authenticated : boolean = false;
  options: string[] = ["red","green", "orange"];
  borderColor: string = "black";

  constructor() { 
    this.updateUI();
  }
  updateUI(){
      // console.log("Update UI");
      // this.title = "New title";
      setTimeout(()=>{
        console.log("Update UI");
        this.title += " updated!";
        this.authenticated = !this.authenticated;
        this.options.push("New option");
      },1000)
  }
  onChange(event: any){
    let value: string = event.target.value;
    console.log(value);

    this.borderColor = value;
  }

}
