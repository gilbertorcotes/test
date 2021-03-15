import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLoggedin = !!this.auth.getToken() && !!this.auth.getIdentity();
    if (!userLoggedin){
      this.router.navigate(['/session/login']);
    }
    return userLoggedin;
  }

  constructor(private auth: AuthService, private router: Router){

  }
}
