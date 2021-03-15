import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any>{
    const url = 'https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503';
    return this.http.get<any>(url);
  }
}
