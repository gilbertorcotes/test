import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public identity;
  public token;
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url;
  }

  register(user_to_register){

    let json = JSON.stringify(user_to_register);
    let params = json;

    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'/register', params, { headers: headers });
  }

  updateUser(user_to_update){
    let json = JSON.stringify(user_to_update);
    let params = json;

    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers.append('Authorization', this.token);

    return this._http.put(this.url+'/update-user/'+user_to_update.id, params, { headers: headers });
  }

}
