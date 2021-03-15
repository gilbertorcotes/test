import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphCarsComponent } from './graph-cars/graph-cars.component';
import { carsRouter } from './cars-route';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [GraphCarsComponent],
  imports: [
    CommonModule,
    carsRouter,
    ChartsModule
  ]
})
export class CarsModule { }
