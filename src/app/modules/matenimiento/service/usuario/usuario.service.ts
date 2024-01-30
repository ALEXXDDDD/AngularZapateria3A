import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstants } from 'src/app/constants/url.constants';
import { RequestVWUsuario } from 'src/app/models/request-vwUsuario-model';
import { ResponseVWUsuario } from 'src/app/models/response-vwUsuario-model';
import { CrudService } from 'src/app/modules/shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<RequestVWUsuario,ResponseVWUsuario> {

  constructor(
    protected http:HttpClient
  ) { 
    super (http,urlConstants.Usuario)
  }
}
