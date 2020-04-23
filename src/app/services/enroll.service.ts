import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  constructor(private http: HttpClient) {}

  /** Create api which will call respective api using observable. */
  submitEnroll(reqBody: any): Observable<any> {
    let url = `enrollnow`
    return this.http.post(url, reqBody);
  }
}
