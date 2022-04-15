import { Component, OnInit } from '@angular/core';
import { RandomNumberGeneratorService } from './random-number-generator.service';

@Component({
  selector: 'random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.css']
})
export class RandomNumberGeneratorComponent implements OnInit {
  randomNumberSet:any = [];
  constructor(private randomNumberService: RandomNumberGeneratorService) { }

  ngOnInit(): void {
    this.getRandomNumberSet(1);
  }


  getRandomNumberSet(value:number){
    this.randomNumberSet = this.randomNumberService.getRandomNumberArray(value);
  }



}
