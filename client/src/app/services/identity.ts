import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
 providedIn: 'root'
})

export class identity {

  public identity;
  public token;

  constructor(private _userService:AuthService) {

  }

}
