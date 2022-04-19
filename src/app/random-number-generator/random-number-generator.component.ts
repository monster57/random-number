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
  viewGrid: boolean = true;
  constructor(private randomNumberService: RandomNumberGeneratorService) { }

  ngOnInit(): void {
    this.getRandomNumberSet(1);

  }

  startGuess(): void{
    this.viewGrid = false;
  }

  refresh(): void {
    window.location.reload();
  }

  getRandomNumberSet(value:number){
    this.randomNumberSet = this.randomNumberService.getRandomNumberArray(value);
  }

  checkValue(){
    if(this.randomNumberService.areArrayEqual(this.inputFormUser , this.randomNumberSet)){
      this.getRandomNumberSet(this.inputFormUser.length+1);
      this.inputFormUser = [];
      this.viewGrid = true;
    }else{
      alert("game over");
      this.refresh();
    }
  }



}
