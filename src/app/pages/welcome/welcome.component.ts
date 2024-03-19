import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseModelo } from 'src/app/modules/matenimiento/models/modelo/modelo-response.model';


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
  constructor (
  
    
    private _productoService : ProductoService,
    private _modeloService : ModeloService
    

  )
  {
    
  }
  ngOnInit(): void {
    this.listarProductos()
    this.listarModelos()
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
}
