import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


import { RequestLogin } from '../models/login-request.models';
import { urlConstants } from 'src/app/constants/url.constants';
import { ResponseLogin } from 'src/app/models/login-response.models';
import { ResponseApiFacturacion } from '../../matenimiento/models/APIFacturacion/ApiFacturacion-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private authUrl = "https://facturacion.apisperu.com/api/v1/auth/login"
  constructor(
    private http:HttpClient
  ) { 

  }
  login (request:RequestLogin):Observable<ResponseLogin>
  {
    return this.http.post<ResponseLogin>(urlConstants.auth,request)
  }
  loginApi(username:String,password:string):Observable<ResponseApiFacturacion>
  {
    const body ={username,password}
    return this.http.post<ResponseApiFacturacion>(this.authUrl,body)
  }
}
