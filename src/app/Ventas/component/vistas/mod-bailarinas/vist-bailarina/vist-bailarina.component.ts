import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AcciontConstants } from 'src/app/constants/general.constans';
import { ResponseProducto } from 'src/app/modules/matenimiento/models/producto/producto-response.model';
import { ResponseVerModelos } from 'src/app/modules/matenimiento/models/VerStore/verModelosResponse.model';
import { VistBailarinasService } from 'src/app/modules/matenimiento/service/vistaBailarinas/vist-bailarinas.service';
import { VistaServiceService } from 'src/app/services/Vista/vista-service.service';
import { VistDetalle } from 'src/app/services/Vista/vistDetalle-model';

@Component({
  selector: 'app-vist-bailarina',
  templateUrl: './vist-bailarina.component.html',
  styleUrls: ['./vist-bailarina.component.css']
})
export class VistBailarinaComponent implements OnInit {
  responseVerModelos:ResponseVerModelos[]=[]
  detalleSelect : VistDetalle = new VistDetalle()
  responseProducto :ResponseProducto[]=[] 
  modalRef?: BsModalRef;
  titleModal : string = ""
  productoSelect : ResponseVerModelos = new ResponseVerModelos()
  accionModal : number = 0
  modalService: any;
  constructor(
    private _verBaularinasService:VistBailarinasService,
    private _verZapatilService:VistaServiceService

  )
  {

  }
  ngOnInit(): void {

    this.mostarZapatillas("Bailarinas")
  }
  monstrarDetalle(template:TemplateRef<any>,producto:ResponseProducto,id:number)
  {
    debugger
    this.titleModal ="Detalle"
    this.accionModal = AcciontConstants.crear
    this.openModal(template);

  }
  openModal(template: TemplateRef<any>) {
    debugger
    this.modalRef = this.modalService.show(template);
  }

  getCloseModalEmmit(res:boolean)
  {
    this.modalRef?.hide()
    if(res)
    {
      this.lsitarBailarinas()
    }
  }
  lsitarBailarinas()
  {
    this._verBaularinasService.getAll().subscribe(
      {
        next:(data:ResponseVerModelos[])=>{
          console.log(data)
          this.responseVerModelos=data
        }
      }
    )
  }
  mostarZapatillas(request: string) {
    const body = JSON.stringify(request); //
    this._verZapatilService.nombreModelo(body).subscribe(
      {
        next: (data: ResponseProducto[]) => {
          console.log(data);
          this.responseProducto = data;
        }
      }
    );
  }


}