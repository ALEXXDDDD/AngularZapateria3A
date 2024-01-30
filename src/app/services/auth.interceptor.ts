import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _router:Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token = sessionStorage.getItem("token")
    let request = req;
    if(token)
    {
      request=req.clone(
        {
          setHeaders:{
            authorization: `Bearer ${token}`
          }
        }
      );
    }
    return  next.handle(request);
    
  }
}
