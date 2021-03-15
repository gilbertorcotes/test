import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { loginRouter } from './login-route';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    loginRouter,
    FormsModule,
    HttpClientModule
    ]
})
export class LoginModule { }
