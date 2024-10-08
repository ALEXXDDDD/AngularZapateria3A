import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/services/crud.service';
import { RequestProducto } from '../../models/producto/producto-request.model';
import { ResponseVerModelos } from '../../models/VerStore/verModelosResponse.model';
import { HttpClient } from '@angular/common/http';
import { urlConstants } from 'src/app/constants/url.constants';

@Injectable({
  providedIn: 'root'
})
export class VistZapatosService extends CrudService<RequestProducto,ResponseVerModelos>  {

  constructor(
    protected http:HttpClient
  ) { 
    super(http,urlConstants.vistaZapatos
    )
  }
}
