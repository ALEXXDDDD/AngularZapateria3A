import { Component, OnInit, TemplateRef } from '@angular/core';
import { ResponseVWMaterial } from '../../../models/material/material-responseVW.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MaterialService } from '../../../service/material/material.service';
import { ResponseMaterial } from '../../../models/material/material-response.model';
import { AcciontConstants } from 'src/app/constants/general.constans';

@Component({
  selector: 'app-mant-material-list',
  templateUrl: './mant-material-list.component.html',
  styleUrls: ['./mant-material-list.component.css']
})
export class MantMaterialListComponent implements OnInit {

  responseVWMaterial : ResponseVWMaterial [] = []
  response : ResponseMaterial [] = []
  responseMaterial :ResponseMaterial = new ResponseMaterial()
  materialSelect : ResponseVWMaterial = new ResponseVWMaterial ()
  modalRef? : BsModalRef
  titleModal : String = ""
  accionModal : number = 0
  constructor (
    private modalService :BsModalService,
    private _materialService : MaterialService
  )
  {

  }

  ngOnInit(): void {
    this.listarMateriales()
  }
  listarMateriales ()
  {
    this._materialService.getAll().subscribe
    (
      {
        next:(data:ResponseMaterial[]) => {
          this.response = data 
          console.log(data)
        },
        error:() => {},
        complete:() => {}

      }
    )
  }
  crearMaterial(template:TemplateRef<any>)
  {
    this.titleModal = "Nuevo Material"
    this.accionModal = AcciontConstants.crear
    this.materialSelect = new ResponseVWMaterial()
    this.openModal(template)
  }
  editarMaterial(template:TemplateRef<any> , material:ResponseMaterial)
  {
    this.titleModal = "Editar Material"
    this.accionModal = AcciontConstants.editar
    this.openModal(template)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getCloseModalEmmit(res:boolean)
  {
    this.modalRef?.hide()
    if(res)
    {
      this.listarMateriales()
    }
  }
  eliminarMaterial(id:number)
  {

  }

}
