import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from '../../../service/rol.service';
import { ResponseRol } from '../../../models/rol/rol-response.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpHeaders } from '@angular/common/http';
import { AcciontConstants } from 'src/app/constants/general.constans';

@Component({
  selector: 'app-mant-rol-list',
  templateUrl: './mant-rol-list.component.html',
  styleUrls: ['./mant-rol-list.component.css']
})
export class MantRolListComponent implements OnInit {
  Rol : ResponseRol[]=[] // Lista 
  modalRef?: BsModalRef;
  rolSelect :ResponseRol = new ResponseRol() // Mandar para el register 
  titleModal : string = ""
  accionModal : number = 0

  constructor(
    private _router:Router, 
    private modalService: BsModalService,
    private _rolService : RolService
  ){
    
  }
  /**
   * FIXME: El lo primero que se ejecuta al cargar la pagina 
   */
  ngOnInit(): void {
    /* let token = sessionStorage.getItem("token")
    const jwtHeaders = new HttpHeaders(
      {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    )
    
    if(!token){
      alert("No as iniciado Sesion")
      this._router.navigate(['auth'])
    } */
    this.listarRoles()
  }
  listarRoles()
  {
    this._rolService.getAll().subscribe(
      {
        next:(data:ResponseRol[]) => {
          this.Rol=data;
          
          console.log(data)
        },
        error:(error) => {
          console.log(error)
        },
        complete:() => {}
      }
    )
  }
  crearRol(template: TemplateRef<any>)
  {
    this.titleModal ="Nuevo Rol"
    this.rolSelect = new ResponseRol()
    this.accionModal = AcciontConstants.crear
    this.openModal(template);

  }
  editarRol(template: TemplateRef<any>, rol:ResponseRol)
  {
    this.titleModal ="Editar Rol"
    this.rolSelect = rol
    this.accionModal = AcciontConstants.editar
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
      this.listarRoles()
    }
  }
  eliminarRol(id:number)
  {
    let result= confirm("Estas seguro de eliminar ")
    if (result)
    {
      this._rolService.delete(id).subscribe(
        {
          next:(data:number)=>{
            alert("Eliminado Existosamente")
          },
          error:(error)=>{},
          complete:()=>{}
        }
      )
    }
  }
}
