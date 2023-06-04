import {Component, OnInit} from '@angular/core';
import {ICar} from "../../../../interfaces";
import {CarService} from "../../../../services/car.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{

  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar| null;
  carForDelete: ICar| null;

  constructor(private carService:CarService) {
  }
  ngOnInit(): void {
    this._getAllCars()
    this._initForm()

  }

  _getAllCars(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }
  _initForm(): void {
    this.form = new FormGroup({
      brand: new FormControl(null, [Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/),Validators.max(20),Validators.min(1)]),
      price: new FormControl(null, [Validators.max(1000000), Validators.min(0)]),
      year: new FormControl(null, [Validators.max(new Date().getFullYear()), Validators.min(1990)])
    })
  }

  save() {
    if (!this.carForUpdate) {
      this.carService.createCar(this.form.getRawValue()).subscribe(()=>{
        this._getAllCars()
      })
    }else {
      this.carService.updateById(this.carForUpdate.id, this.form.getRawValue()).subscribe(()=>{
        this._getAllCars()
        this.carForUpdate = null
      })
    }
    this.form.reset()

  }

  getCarForUpdate(car: ICar) {
    this.carForUpdate = car
    this.form.setValue({
      brand: car.brand,
      price: car.price,
      year: car.year
    })
  }

  getCarForDelete(car: ICar) {
    this.carService.deleteById(car.id).subscribe(()=>{
      this._getAllCars()
      this.carForDelete = null
    })
  }
}
