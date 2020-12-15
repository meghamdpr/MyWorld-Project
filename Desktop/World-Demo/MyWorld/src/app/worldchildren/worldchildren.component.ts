import { Component, OnInit } from '@angular/core';
import { ContinentserviceService } from '../continentservice.service';

@Component({
  selector: 'app-worldchildren',
  templateUrl: './worldchildren.component.html',
  styleUrls: ['./worldchildren.component.css']
})
export class WorldchildrenComponent implements OnInit {

  continents:any;
  countries:any;

  constructor(private worldservice:ContinentserviceService) { }

  ngOnInit(){
     this.worldservice.getContinents()
      .subscribe((data) =>this.continents=data)
  }
  
   getcountriesdata(item:string){
    this.link=item;
    console.log("entered into countries");
    console.log(this.link);
    this.worldservice.getcountries(this.link).subscribe(data=>this.countries=data);
  }
}
