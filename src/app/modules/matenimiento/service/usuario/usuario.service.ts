import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlConstants } from 'src/app/constants/url.constants';
import { RequestVWUsuario } from 'src/app/models/request-vwUsuario-model';

import { CrudService } from 'src/app/modules/shared/services/crud.service';

import { ResponseVUsuario } from 'src/app/models/response-vwUsuario-model';
import { CorreoVerifApi } from '../../models/usuario/usuarioApiCorreo.model';
import { ResponseUsuario } from '../../models/usuario/responseUsuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<RequestVWUsuario,ResponseUsuario> {

  constructor(
    protected http:HttpClient
  ) { 
    super (http,urlConstants.Usuario)
  }
  
  
   validacionCorreoUsuario(correoUsuario:string):Observable<CorreoVerifApi>
  {
  
  let urlHunterIO = "https://api.hunter.io/v2/email-verifier?email=##correo##&api_key=123a9d5cdb7d8ac5ab7011113b84b75edeefca6f"
  https://api.hunter.io/v2/email-verifier?email=dddd@gmail.com&api_key=123a9d5cdb7d8ac5ab7011113b84b75edeefca6f

  urlHunterIO = urlHunterIO.replace("##correo##",correoUsuario)
   return this.http.get<CorreoVerifApi>(urlHunterIO)
  }
}
