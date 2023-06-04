import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import {CarsComponent} from "./components/cars/cars.component";
import {CarComponent} from "./components/car/car.component";
import {CarPageComponent} from "./pages/carPage/car-page.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    CarPageComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
