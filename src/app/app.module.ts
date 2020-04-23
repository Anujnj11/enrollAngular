import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';


//Interceptor
const httpInterceptor = { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true };

import { EnrollService } from './services/enroll.service';
//Services
const services = [EnrollService];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [httpInterceptor, ...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
