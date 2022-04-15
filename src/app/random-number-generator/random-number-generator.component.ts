import { Component, OnInit } from '@angular/core';
import { RandomNumberGeneratorService } from './random-number-generator.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'random-number-generator',
  templateUrl: './random-number-generator.component.html',
  styleUrls: ['./random-number-generator.component.css']
})
export class RandomNumberGeneratorComponent implements OnInit {
  randomNumberSet:any = [];
  inputFormUser:any = [];
  constructor(private randomNumberService: RandomNumberGeneratorService) { }

  ngOnInit(): void {
    this.getRandomNumberSet(2);
    // this.elements = Array(2).fill().map((x,i)=>i); // [0,1,2,3,4]

  }


  getRandomNumberSet(value:number){
    this.randomNumberSet = this.randomNumberService.getRandomNumberArray(value);
  }

  checkValue(){
    console.log(this.inputFormUser);
    console.log(this.randomNumberSet);
    if(this.randomNumberService.areArrayEqual(this.inputFormUser , this.randomNumberSet)){
      alert("this is successfull");
    }else{
      alert("this is not successfull");
    }
  }



}
