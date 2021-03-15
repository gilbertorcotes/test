import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";

const SIGNUP_ROUTE: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

export const signupRouter = RouterModule.forChild(SIGNUP_ROUTE);
