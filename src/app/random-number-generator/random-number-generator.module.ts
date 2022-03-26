import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumberGeneratorComponent } from './random-number-generator.component';
import { RandomNumberGeneratorService } from './random-number-generator.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    RandomNumberGeneratorComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatGridListModule
  ],
  providers:[
    RandomNumberGeneratorService
  ],
  exports:[
    RandomNumberGeneratorComponent
  ]
})
export class RandomNumberGeneratorModule { }
