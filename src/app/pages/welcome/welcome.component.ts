import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestFilterGeneric } from 'src/app/modules/matenimiento/models/genericFilterRequest.model';
import { ResponseModelo } from 'src/app/modules/matenimiento/models/modelo/modelo-response.model';
import { RequestProducto } from 'src/app/modules/matenimiento/models/producto/producto-request.model';
import { ResponseProducto } from 'src/app/modules/matenimiento/models/producto/producto-response.model';
import { ModeloService } from 'src/app/modules/matenimiento/service/modelo/modelo.service';
import { ProductoService } from 'src/app/modules/matenimiento/service/producto/producto.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit  {
  responseProducto : ResponseProducto []=[]
  responseModelo : ResponseModelo[]=[]
  ProductoSelect : RequestProducto = new RequestProducto()
  titleModal : string = ""
  accionModal : number = 0

  totalItems:number =0
  itemsPerPage:number=1
  request : RequestFilterGeneric = new RequestFilterGeneric()
  myFormFilter:FormGroup
  constructor (
    private _router:Router, 
    private fb:FormBuilder,
    private _productoService : ProductoService,
    private _modeloService : ModeloService,

    

  )
  {
    this.myFormFilter = this.fb.group(
      {
        
        nombreProd: [""],
        codigoProd: [""]
      }
    )
  }
 
  ngOnInit(): void {
    // this.listarProductos()
    // this.listarModelos()
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
 
  listarModelos()
  {
      this._modeloService.getAll().subscribe(
        {
          next:(data:ResponseModelo[])=>{
            this.responseModelo = data
            console.log("Modelo",data)
          },
          error:()=>{},
          complete:()=>{}
        }
      )
  }
  /* openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getCloseModalEmmit(res:boolean)
  {
    this.modalRef?.hide()
    if(res)
    {
      this.filtrar()
    }
  }
  crearProducto(template: TemplateRef<any>)
  {
    this.titleModal ="Nuevo Producto"
    this.ProductoSelect = new ResponseProducto()
    this.accionModal = AcciontConstants.crear
    this.openModal(template);

  }
  editarProducto(template: TemplateRef<any>, Producto:ResponseProducto)
  {
    this.titleModal ="Editar Producto"
    this.ProductoSelect = Producto
    this.accionModal = AcciontConstants.editar
    this.openModal(template);
  }
  filtrar()
  {
    
    let valuedorm = this.myFormFilter.getRawValue()
  
    this.request.filtros.push({name:"nombreProducto",value: valuedorm.nombreProducto} );
    this.request.filtros.push({name:"descripProducto",value: valuedorm.descripProducto} );
    
    this._productoService.genericFilter(this.request).subscribe
    (
      {
        next:(data:ResponseFilterGeneric<ResponseProducto>)=>{
          console.log(data)
          this.responseProducto  = data.lista;
          this.totalItems = data.totalRegistros
          
        },
        error:(error)=>{
          console.log(error)
        },
        complete:(
  
        )=>{
          console.log("Compelete")
        }
      }
    )
    
  }
  changePage(event:PageChangedEvent)
  {
    this.request.numeroPagina = event.page
  this.filtrar()
  }
  changeItemsPerPage()
  {
    this.request.cantidad = this.itemsPerPage
    this.filtrar()
  } */
}


