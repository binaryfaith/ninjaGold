import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-logged-data-component',
  templateUrl: './logged-data-component.component.html',
  styleUrls: ['./logged-data-component.component.css']
})
export class LoggedDataComponentComponent implements OnInit {
  numbers: number = 0;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers();
  }

}
