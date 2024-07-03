import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarritoItem } from 'src/app/modules/matenimiento/models/carritoItem/carritoItem.model';
import { ResponseProducto } from 'src/app/modules/matenimiento/models/producto/producto-response.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  listaProducto : CarritoItem[]=[]
  listaProductosSubject: BehaviorSubject<CarritoItem[]>= 
  new BehaviorSubject<CarritoItem[]>([])

  constructor() { 
    const carritoJson = localStorage.getItem('carrito-compras')
    if(carritoJson!==null)
      {
        const carrito = JSON.parse(carritoJson)
        this.listaProducto = carrito
        this.listaProductosSubject.next(this.listaProducto)
      }

  }
  addProducto(producto:ResponseProducto):void
  {
    let item = this.listaProducto
    .filter( i => i.producto.idProducto == producto.idProducto)[0];
  if(item) {
    item.cantidad++;
  } else {
    item = {
      producto: producto,
      cantidad: 1
    }
    this.listaProducto.push(item);
  }
  this.listaProductosSubject.next(this.listaProducto);
  // guardar en el localstorage
  const listaJson = JSON.stringify(this.listaProducto);
  localStorage.setItem('carrito-compras', listaJson);

    }
  removeProducto(id:number):void
  {
    for(let index in this.listaProducto)
      {
        if(this.listaProducto[index].producto.idProducto===id)
          {
            this.listaProducto.splice(+index,1)
            const listJson = JSON.stringify(this.listaProducto)
            localStorage.setItem('carrito-compras',listJson)
            break
          }
      }
  }
  editarCantidad(id:number,cantidad:number):void{
    let item = this.listaProducto
    .filter(i=>i.producto.idProducto==id)[0]
    if(item)
      {
        item.cantidad=cantidad
      }
      this.listaProductosSubject.next(this.listaProducto)
      const listaJson = JSON.stringify(this.listaProducto)
      localStorage.setItem('carrito-compras',listaJson)

  }
  listarCarrito():Observable<CarritoItem[]>
  {
    return this.listaProductosSubject.asObservable()
  }
}
