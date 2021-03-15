import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})

export class getJsonFromUrl {

  baseURL = "https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a";

  constructor(private _http: HttpClient) {
   }


   jsonResult(jsonUrl: string){
    return this._http.get(jsonUrl);
  }
}
