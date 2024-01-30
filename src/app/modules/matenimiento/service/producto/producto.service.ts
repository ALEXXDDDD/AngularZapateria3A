import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/modules/shared/services/crud.service';

import { HttpClient } from '@angular/common/http';
import { urlConstants } from 'src/app/constants/url.constants';
import { RequestProducto } from '../../models/producto/producto-request.model';
import { ResponseProducto } from '../../models/producto/producto-response.model';
@Injectable({
  providedIn: 'root'
})
export class ProductoService extends CrudService<RequestProducto,ResponseProducto> {

  constructor(
    protected http:HttpClient
  ) {
    super (http,urlConstants.producto)
   }
}
