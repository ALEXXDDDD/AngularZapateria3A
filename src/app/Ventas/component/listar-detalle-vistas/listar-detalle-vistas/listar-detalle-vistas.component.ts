import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadStateEnum } from 'src/app/modules/matenimiento/models/core/utils/load-enum';
import { ResponseDetalleProducto } from 'src/app/modules/matenimiento/models/producto/producto-responseDetalleProducto.model';
import { ResponseVDetalleProducto } from 'src/app/modules/matenimiento/models/producto/producto-responseVDetalle.model';
import { ResponseDetalleProcedureProducto } from 'src/app/modules/matenimiento/models/producto/productoResponseDetalle.model';
import { ResponseVerModelos } from 'src/app/modules/matenimiento/models/VerStore/verModelosResponse.model';
import { DetalleProductoService } from 'src/app/modules/matenimiento/service/detalleProducto/detalle-producto.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-listar-detalle-vistas',
  templateUrl: './listar-detalle-vistas.component.html',
  styleUrls: ['./listar-detalle-vistas.component.css']
})
export class ListarDetalleVistasComponent {
  @Input() title :string=""
  @Input() VerModelos :ResponseVerModelos= new ResponseVerModelos() 
  @Input() DetalleProducto :ResponseVDetalleProducto= new ResponseVDetalleProducto() 
  @Input() accion :number= 0 

  /**
   * Variables de Salida 
   */
  @Output () closeModalEmmit = new EventEmitter<boolean>()
  responseVDetalle : ResponseVDetalleProducto[]=[]
  responseDetalle : ResponseDetalleProducto[]=[]
  detalleProductoResponse : ResponseDetalleProcedureProducto[] =[]

  frmLoadSt = LoadStateEnum.None;
  loadStateEnum = LoadStateEnum;
  constructor (
    private fb:FormBuilder,
    private _carritoService:CarritoService,
    private _DetalleProducto:DetalleProductoService
  )
  {
  
  }
  // carga:number = 1;
  // addProducto(prod:ResponseProducto)
  // {
  //   this._carritoService.addProducto(prod)
  // }
  ngOnInit(): void {
      this.monstrarDetalleProducto(this.VerModelos.idProducto)
     
  }
  monstrarDetalleProducto(id:number)
  {

    this._DetalleProducto.getDetalle(id).subscribe(
      {
        next:(data:ResponseDetalleProcedureProducto[])=>{
          
          if (Array.isArray(data)) {
            this.frmLoadSt = LoadStateEnum.Success;
            this.detalleProductoResponse = data;
          } else {
            console.error('Data is not an array', data);
          }
         },
         error:()=>
         {
          this.frmLoadSt = LoadStateEnum.Error;
         }
      }
    )
  }
  save(name: string, lastName: string) {
    this.frmLoadSt = LoadStateEnum.Loading;

    // envio al servido
    setTimeout(() => {
      // guargador correcto
      alert('Se guardo');
      this.frmLoadSt = LoadStateEnum.Success;
    }, 4000);
  }
  
  cerrarModal(res:boolean)
  {
    this.closeModalEmmit.emit(res)
    //true Hubo modificacion en la base de datos
      

    //false => No hubo modificacion de la base de datos
  }
}
