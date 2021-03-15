import { RouterModule, Routes } from "@angular/router";
import { GraphCarsComponent } from "./graph-cars/graph-cars.component";

const CARS_ROUTE: Routes = [
  {
    path: '',
    component: GraphCarsComponent
  }
];

export const carsRouter = RouterModule.forChild(CARS_ROUTE);
