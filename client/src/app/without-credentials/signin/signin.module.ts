import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { signupRouter } from './signup-route';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    signupRouter,
    FormsModule,
    HttpClientModule
  ]
})
export class SigninModule { }
