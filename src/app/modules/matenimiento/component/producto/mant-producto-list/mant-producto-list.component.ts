import { Component, OnInit } from '@angular/core';
import { ResponseProducto } from '../../../models/producto/producto-response.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ProductoService } from '../../../service/producto/producto.service';
import { ModeloService } from '../../../service/modelo/modelo.service';
import { ResponseModelo } from '../../../models/modelo/modelo-response.model';

@Component({
  selector: 'app-mant-producto-list',
  templateUrl: './mant-producto-list.component.html',
  styleUrls: ['./mant-producto-list.component.css']
})
export class MantProductoListComponent implements OnInit {

  responseProducto : ResponseProducto []=[]
  responseModelo : ResponseModelo []=[]
  productoEnviar : ResponseProducto = new ResponseProducto ()
  modalRef?: BsModalRef;
  titleModal : string = ""
  accionModal : number = 0
  constructor (
    private _router: Router,
    private modalService: BsModalService,
    private _productoService : ProductoService,
    private _modeloService : ModeloService

  )
  {
    
  }
  ngOnInit(): void {
    this.listarProductos();
    this.listarModelo()
  }
  listarProductos()
  {
    this._productoService.getAll().subscribe({
      next: (data:ResponseProducto[])=>{
        this.responseProducto = data 
        console.log(data)
      },
      error: (error)=>{
        alert("Ocurrio Un error ")
      },      
      complete: ()=>{}
    })
  }
  listarModelo()
  {
    this._modeloService.getAll().subscribe(
      {
        next: (datos:ResponseModelo[])=>{
          this.responseModelo = datos 
          
        },
        error: (error)=>{
          alert("Ocurrio Un error ")
        },      
        complete: ()=>{}
      }
    )
  }
  crearProducto()
  {

  }
  
}
