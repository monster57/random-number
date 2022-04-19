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


  areArrayEqual(arr1:any, arr2:any)
    {
        let n = arr1.length;
        let m = arr2.length;
 
        // If lengths of array are not equal means
        // array are not equal
        if (n != m)
            return false;
 
        // Linearly compare elements
        for (let i = 0; i < n; i++)
            if (arr1[i] != arr2[i])
                return false;
 
        // If all elements were same.
        return true;
    }
}
