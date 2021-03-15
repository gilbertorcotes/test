import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public identity;
  public token;
  public url: string;

  public getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if( identity != "undefined"){
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;

  }

  public getToken(){
    let token = localStorage.getItem('token');

    if( token != "undefined"){
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;

  }
}
