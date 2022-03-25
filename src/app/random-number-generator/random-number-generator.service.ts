import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGeneratorService {

  constructor() { }

  getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
  }
}
