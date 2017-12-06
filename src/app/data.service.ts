import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number = 0;
   sum:number = 0;

   retrieveNumbers(): number{
     return this.numbers;
   }

   pushOne(){
    this.numbers = Math.floor((Math.random()*2)+4)
    this.sum += this.numbers;
    return this.sum
  }

  pushTwo(){
    this.numbers = Math.floor((Math.random()*5)+6)
    this.sum += this.numbers;
    return this.sum
  }

  pushThree(){
    var max = 101
    var min = -101
    this.numbers = Math.floor(Math.random()*(max-min)+min);
    this.sum += this.numbers;
    return this.sum;
  }

  pushFour(){
    this.numbers = Math.floor((Math.random()*7)+9)
    this.sum += this.numbers;
    return this.sum
  }
 
}


 


