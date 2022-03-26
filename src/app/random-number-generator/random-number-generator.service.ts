import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGeneratorService {

  constructor() { }

  getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
  }

  getRandomNumberArray(numberOfElements:any){
    let arrOfNumbers = [];
    for(let i = 0;i<numberOfElements;i++){
      arrOfNumbers.push(this.getRandomNumber())
    }
    return arrOfNumbers;
  }
}
