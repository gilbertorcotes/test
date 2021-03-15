import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { usersRouter } from './users-route';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    usersRouter,
    NgxPaginationModule
  ]
})
export class UsersModule { }
