import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../service/cliente/cliente.service';
import { Router } from '@angular/router';
import { ResponseCliente } from '../../../models/cliente/cliente-response.model';
import { ResponseVWCliente } from '../../../models/cliente/response-VMCliente.model';
import { ResponseListCliente } from '../../../models/cliente/list-cliente-response.model';

@Component({
  selector: 'app-mant-cliente-list',
  templateUrl: './mant-cliente-list.component.html',
  styleUrls: ['./mant-cliente-list.component.css']
})
export class MantClienteListComponent implements OnInit {
  cliente:ResponseVWCliente[] =[]
  responseVwCliente: ResponseVWCliente[] = [];
  clienteResponse:ResponseListCliente = new ResponseListCliente()
  constructor(
    private _clienteService : ClienteService,
    private _router:Router
  ){

  }
  
  ngOnInit(): void {
 
   this.listarClientes()
  }
  listarClientes()
  {
    this._clienteService.getAll().subscribe({
      next:(data:ResponseVWCliente[])=>{
        this.responseVwCliente=data
        console.log(data)
      },
      error:(error)=>{
        alert("OCURRIO UN ERROR ")
      },
      complete:()=>{}
  }
    )}
}
