import { RouterModule, Routes } from "@angular/router";
import { ListUsersComponent } from "./list-users/list-users.component";

const USERS_ROUTE: Routes = [
  {
    path: '',
    component: ListUsersComponent
  }
];

export const usersRouter = RouterModule.forChild(USERS_ROUTE);
