import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  /** Would not approach like ideally I would have created network intercepter which will handle parent url and if authentication token is required at anytime. */


  /** set the baseURL FOR API. */
  baseUrl: String = "";

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api;
  }

  /** Create api which will call respective api using observable. */
  // submitEnroll(reqBody: any) : Observable<any> {
  // let url = `${this.baseUrl}enrollnow`;
  //   return this.http.post(url, reqBody);
  // }
  getGoogle(): Observable<any> {
    return this.http.get("https://reqres.in/api/users/2");
  }
}
