import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    baseUrl: String = '';
    userProfileUrl: String = '';

    constructor() {
        this.baseUrl = environment.api;
    }
    //function which will be called for all http calls
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headers = request.headers;
        headers = headers
            .set('cache-control', 'no-cache')
            .set("Content-Type", "application/json");


        let updatedRequest;
        //how to update the request Parameters
        updatedRequest = request.clone({ url: this.baseUrl + request.url, headers: headers });

        //logging the updated Parameters to browser's console
        return next.handle(updatedRequest).pipe(
            tap(
                event => {
                    //logging the http response to browser's console in case of a success
                    if (event instanceof HttpResponse) {

                    }
                },
                error => {
                    //logging the http response to browser's console in case of a failuer
                    if (error instanceof HttpErrorResponse) {
                        // console.log("api call error :", error);
                        if ([0, 500].includes(error.status)) {
                            const msg = error.message ? error.message : 'Something Went wrong!'
                            alert(msg);
                            return;
                        }

                        if (error.error.message != "") {
                        }

                    }
                }
            )
        );
    }
}