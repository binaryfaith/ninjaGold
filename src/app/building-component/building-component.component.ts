import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-building-component',
  templateUrl: './building-component.component.html',
  styleUrls: ['./building-component.component.css']
})
export class BuildingComponentComponent implements OnInit {
numbers: number = 0;

constructor(private _dataService: DataService) {}
 
  ngOnInit() {
  this.numbers = this._dataService.retrieveNumbers();
  }

 farm(){
   this._dataService.pushOne()
   this.numbers = this._dataService.retrieveNumbers()
 }

 cave(){
  this._dataService.pushTwo()
  this.numbers = this._dataService.retrieveNumbers()
}

casino(){
  this._dataService.pushThree()
  this.numbers = this._dataService.retrieveNumbers()
}

house(){
  this._dataService.pushFour()
  this.numbers = this._dataService.retrieveNumbers()
}

}
