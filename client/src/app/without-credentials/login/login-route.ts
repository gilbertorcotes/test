import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";


const LOGIN_ROUTE: Routes = [
  {
    path: '',
    component: SigninComponent
  }
];

export const loginRouter = RouterModule.forChild(LOGIN_ROUTE);
