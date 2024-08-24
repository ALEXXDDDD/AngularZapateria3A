import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AcciontConstants } from 'src/app/constants/general.constans';
import { ResponseProducto } from 'src/app/modules/matenimiento/models/producto/producto-response.model';
import { ResponseVerModelos } from 'src/app/modules/matenimiento/models/VerStore/verModelosResponse.model';
import { VistBailarinasService } from 'src/app/modules/matenimiento/service/vistaBailarinas/vist-bailarinas.service';

@Component({
  selector: 'app-vist-bailarina',
  templateUrl: './vist-bailarina.component.html',
  styleUrls: ['./vist-bailarina.component.css']
})
export class VistBailarinaComponent implements OnInit {
  responseVerModelos:ResponseVerModelos[]=[]
  modalRef?: BsModalRef;
  titleModal : string = ""
  productoSelect : ResponseVerModelos = new ResponseVerModelos()
  accionModal : number = 0
  modalService: any;
  constructor(
    private _verBaularinasService:VistBailarinasService

  )
  {

  }
  ngOnInit(): void {
    this.lsitarBailarinas()
  }
  monstrarDetalle(template:TemplateRef<any>)
  {
    this.titleModal ="Detalle"
    this.accionModal = AcciontConstants.detalle
    this.openModal(template);

  }
  openModal(template: TemplateRef<any>) {
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


}