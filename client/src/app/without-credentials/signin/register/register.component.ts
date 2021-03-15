import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public user: User = new User('','','','');
  public errorMessage;
  public alertRegister;

  constructor(private signup: SignupService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmitRegister(){
    console.log("reigstro .... " +this.user.email);
    this.signup.register(this.user).subscribe(
      response => {

        var responseMessage = <any>response;
        let register = responseMessage;
        //this.identity = register;
        console.log('respuesta ' +register.user.name );
        var user = register.user;
        this.user = user;

        if(!user._id){
          this.alertRegister = 'Error al registrarse ';
        } else {
          this.alertRegister = 'El registro se ha realizado correctamente, Identificate '+ this.user.email;
          this.route.navigate(['/session/login']);
          this.user = new User('','','','');
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          var parsedError = error.error.message;
          console.log(parsedError);

          this.alertRegister = parsedError;
          //this.errorMessage = parsedError;
        }
      }
    );
  }


}
