import { Component, OnInit, TemplateRef } from '@angular/core';
import { ResponseOrden } from '../../../models/orden/orden-response.model';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { OrdenService } from '../../../service/orden/orden.service';
import { AcciontConstants } from 'src/app/constants/general.constans';
import { ResponseListOrden } from '../../../models/orden/orden-request.model';
import { RequestUnidad } from '../../../models/unidad/p/unidad-request.model';
import { ApiFacturacionServiceService } from 'src/app/services/ApiFacturacion/api-facturacion-service.service';
import { Address, Client, Company, Detail, FormaPago, Invoice, Legend } from '../../../models/APIFacturacion/ApiFacturacion.model';
import { ResponseApiFacturacion } from '../../../models/APIFacturacion/ApiFacturacion-response.model';


@Component({
  selector: 'app-mant-list-orden',
  templateUrl: './mant-list-orden.component.html',
  styleUrls: ['./mant-list-orden.component.css']
})

export class MantListOrdenComponent implements OnInit {
  responseOrden : ResponseOrden []=[];
  response: ResponseOrden = new ResponseOrden();
  OrdenSelect : ResponseListOrden = new ResponseListOrden()
  UnidadSelect : RequestUnidad = new RequestUnidad()
  responseVWOrden: ResponseListOrden = new ResponseListOrden();
  modalRef? : BsModalRef;
  titleModal : string = ""
  accionModal : number = 0
  constructor (
    private _router:Router,
    private modalService: BsModalService,

    private facturacionService : ApiFacturacionServiceService,
    private _OrdenService: OrdenService

  )
  {

  }
  ngOnInit():void
  {
    this.listarOrden()
  }
  listarOrden()
  {
    this._OrdenService.getAll().subscribe({
      next:(data: ResponseOrden[])=>{
        this.responseOrden = data;
        console.log(data)
      },
      error:()=>{},
      complete:()=>{}
      }

    )
  }
  enviarFactura() {

    // Crear y rellenar la factura
    const addressClient = new Address();
    addressClient.direccion = "el Pj. Las Nubes N° 178 – El Tambo Huancayo";
    addressClient.provincia = "LIMA";
    addressClient.departamento = "LIMA";
    addressClient.distrito = "LIMA";
    addressClient.ubigueo = "150101";

    const client = new Client();
    client.tipoDoc = "6";
    client.numDoc = 10453493178;
    client.rznSocial = "Lopez Maita Diana Janeth";
    client.address = addressClient;

    const addressCompany = new Address();
    addressCompany.direccion = "Direccion empresa";
    addressCompany.provincia = "LIMA";
    addressCompany.departamento = "LIMA";
    addressCompany.distrito = "LIMA";
    addressCompany.ubigueo = "150101";

    const company = new Company();
    company.ruc = 10453493178;
    company.razonSocial = "Mi empresa";
    company.nombreComercial = "Mi empresa";
    company.address = addressCompany;

    const formaPago = new FormaPago();
    formaPago.moneda = "PEN";
    formaPago.tipo = "Contado";

    const detail = new Detail();
    detail.codProducto = "P001";
    detail.unidad = "NIU";
    detail.descripcion = "PRODUCTO 1";
    detail.cantidad = 2;
    detail.mtoValorUnitario = 50;
    detail.mtoValorVenta = 100;
    detail.mtoBaseIgv = 100;
    detail.porcentajeIgv = 18;
    detail.igv = 18;
    detail.tipAfeIgv = 10;
    detail.totalImpuestos = 18;
    detail.mtoPrecioUnitario = 59;

    const legend = new Legend();
    legend.code = "1000";
    legend.value = "SON CIENTO DIECIOCHO CON 00/100 SOLES";

    const factura = new Invoice();
    factura.ublVersion = "2.1";
    factura.tipoOperacion = "0101";
    factura.tipoDoc = "03";
    factura.serie = "B001";
    factura.correlativo = "1";
    factura.fechaEmision = "2021-01-27T00:00:00-05:00";
    factura.formaPago = formaPago;
    factura.tipoMoneda = "PEN";
    factura.client = client;
    factura.company = company;
    factura.mtoOperGravadas = 100;
    factura.mtoIGV = 18;
    factura.valorVenta = 100;
    factura.totalImpuestos = 18;
    factura.subTotal = 118;
    factura.mtoImpVenta = 118;
    factura.details = [detail];
    factura.legends = [legend];

    debugger
    // Enviar la factura
    const serie="B001"
    const correlativo="1"
    this.facturacionService.loginApiFacturacion(factura,serie,correlativo)
  }
  

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  crearOrden(template:TemplateRef<any>)
  {
    this.titleModal= "Nuevo Orden"
    this.OrdenSelect = new ResponseListOrden()
    this.accionModal = AcciontConstants.crear
    this.openModal(template)
  }
  editarOrden(template:TemplateRef<any>,Orden:ResponseListOrden)
  {
    this.titleModal= "Actaulizar Orden"
    this.OrdenSelect = Orden
    this.accionModal = AcciontConstants.editar
    this.openModal(template)
  }
  crearUnidad(templateUnidad:TemplateRef<any>)
  {
    this.titleModal= "Crear Unidad"
    this.UnidadSelect = new RequestUnidad()
    this.accionModal = AcciontConstants.crear
    this.openModal(templateUnidad)
  }
  eliminarOrden(id:number)
  {
    let result = confirm("Estas seguro de Eliminar")
    if(result)
    {
      this._OrdenService.delete(id).subscribe(
        {
          next:(data:number)=>
          {
            alert("Se elimino Correctamente")
          },
          error:()=>{},
          complete:()=>{}
        }
      )
    }
  }
  getCloseModalEmmit(res:boolean)
  {
    this.modalRef?.hide()
    if(res)
    {
      this.listarOrden()
    }
  }




}
