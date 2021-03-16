import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedinService {

  private userLogged = null;
  private subject: Subject<{ token: string, identity: string }> = new Subject<{ token: string, identity: string }>();

  constructor() {
    if(!!localStorage.getItem("token") && !!localStorage.getItem("identity")){
      this.userLogged={
        token: localStorage.getItem("token"),
        identity: localStorage.getItem("identity")
      }
    }
   }

  public userLoggedIn(token: string, identity: string) {
    this.userLogged = { token, identity };
    this.subject.next({ token, identity });
    console.log(JSON.stringify(this.userLogged));
  }

  public userLogout() {
    this.userLogged = null;
    this.subject.next();
  }

  public getUserLoggedIn() {
    console.log();
    return this.userLogged;
  }

  public userLoggedInSub() {
    return this.subject.asObservable();
  }
}
