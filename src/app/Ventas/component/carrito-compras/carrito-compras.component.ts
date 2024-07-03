import { Component, OnInit } from '@angular/core';
import { CarritoItem } from 'src/app/modules/matenimiento/models/carritoItem/carritoItem.model';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit{
  carrito:CarritoItem[]=[]
  constructor(
    private _carritoService:CarritoService
  )
  {

  }
  ngOnInit(): void {
    this._carritoService.listarCarrito().subscribe(
      {
        next:(data)=>{ this.carrito=data}
      }
    )
    throw new Error('Method not implemented.');
  }
  eliminarProducto(item:CarritoItem):void
  {
    this._carritoService.removeProducto(item.producto.idProducto)
  }
  cambiarCantidad(item:CarritoItem ,cantidad:number):void
  {
    this._carritoService.editarCantidad(item.producto.idProducto,cantidad)
  }
  agregar1(item:CarritoItem):void
  {
    this._carritoService.editarCantidad(item.producto.idProducto,++item.cantidad)
  }
  quitar1(item:CarritoItem ):void
  {
    if(item.cantidad>=2)
      {
        this._carritoService.editarCantidad(item.producto.idProducto,--item.cantidad)
      }
  }

}
