import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
  altText : string= "Photo d'un loup";
  srcPath : string = "https://france3-regions.francetvinfo.fr/image/-Kvvx7U_RGF4WmdtOG-_xVPSXcw/930x620/regions/2020/06/09/5edf9ea708eb3_loup_10-4621851.jpg";
  optionsPicture : string[] = ["https://france3-regions.francetvinfo.fr/image/-Kvvx7U_RGF4WmdtOG-_xVPSXcw/930x620/regions/2020/06/09/5edf9ea708eb3_loup_10-4621851.jpg",
                             "https://static.lpnt.fr/images/2019/04/29/18633880lpw-18633909-article-zoo-beauval-animal-jpg_6166393_660x281.jpg",
                             "https://cdn-s-www.vosgesmatin.fr/images/AF3B9E74-4F57-47D4-B251-3BE33B63D2D0/NW_raw/la-tigresse-nadia-photo-julie-l-maher-wildlife-conservation-society-1586209179.jpg"]
  counter : number = 0
   constructor() {
    this.updatePicture();
   }
   updatePicture(){

    setInterval(()=>{
      this.srcPath = this.optionsPicture[this.counter];
      this.counter=this.counter+1;
      if (this.counter>2) {
        this.counter = 0
      }
    },1000)

}

}
