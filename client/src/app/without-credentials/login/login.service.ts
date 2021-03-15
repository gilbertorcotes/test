import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public identity;
  public token;
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  login(user_to_login, gethash?: boolean ):Observable <any> {
    if(gethash != null) {
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;

    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'/login', params, { headers: headers });
  }

}
