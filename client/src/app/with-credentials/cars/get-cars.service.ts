import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCarsService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    const url = 'https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a';
    return this.http.get<any>(url);
  }
}
