import { UserLoggedinService } from './../../../services/user-loggedin.service';
import { Routes } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Router } from '@angular/router'

@Component({
  selector: 'jgrc-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public user: User = new User('','','','');
  public errorMessage;
  public alertRegister;


  constructor(private login: LoginService, private authservice: AuthService, private route: Router, private service: UserLoggedinService) {
    this.service.userLoggedInSub().subscribe(res => {
      if (!!res){
        this.route.navigate(['/home/users']);
      }
    },
    err => {

    });
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/session/signup']);
  }

  public onSubmit(){
    console.log(this.user);

    // Conseguir los datos del usuario idnetificado
    this.login.login(this.user).subscribe(
      response => {
        var responseMessage = <any>response;
        let identity = responseMessage;
        localStorage.setItem('identity', JSON.stringify(identity));
        this.login.login(this.user, true).subscribe(
          response1 => {
            var respuesta = <any>response1;
            let token = respuesta;
            //Crear elemento en el local storage para tener el token en sesion

            localStorage.setItem('token', token.token);
            this.service.userLoggedIn(token.token, identity);
            this.user = new User('','','','');

            console.log(token);
            console.log(identity);
            error => {
              var errorMessage = <any>error;
              console.log(errorMessage);
              if (errorMessage != null) {
                var parsedError = error.error.message;
                console.log(parsedError);
                this.errorMessage = parsedError;
              }
            }
          }
        );
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          if (errorMessage != null) {
            var parsedError = error.error.message;
            console.log(parsedError);
            this.errorMessage = parsedError;
          }
        }
      });
  }

}
