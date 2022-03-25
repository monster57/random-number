import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumberGeneratorComponent } from './random-number-generator.component';
import { RandomNumberGeneratorService } from './random-number-generator.service';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    RandomNumberGeneratorComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  providers:[
    RandomNumberGeneratorService
  ],
  exports:[
    RandomNumberGeneratorComponent
  ]
})
export class RandomNumberGeneratorModule { }
