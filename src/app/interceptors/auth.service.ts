import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs/Rx";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    try{
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${currentUser.token}`
        }
      });
      return next.handle(request);
    } catch(err){
      return next.handle(request);
    }
  }

}
