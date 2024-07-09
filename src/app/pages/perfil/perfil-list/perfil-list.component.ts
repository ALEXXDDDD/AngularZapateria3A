import { Component, OnInit } from '@angular/core';
import { ResponsePerfil } from 'src/app/modules/matenimiento/models/perfil/perfil-response.model';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {
  /**
   * FLIT:Declaracion de Variables
   */
  
  responsePerfil : ResponsePerfil[]=[]

  constructor(
    private _perfilService : PerfilService,

  )
  {
    
  }
  logout(): void {
    this._perfilService.logout();
  }
  perfil()
  {
    let idUsu = sessionStorage.getItem('idUsuario')
    if(idUsu!=null)
    {
      this._perfilService.getDetalle(idUsu).subscribe(
        {
          next:(data:ResponsePerfil[])=>{this.responsePerfil=data }
        }
      )
    }
   
  }
  ngOnInit(): void {
    this.perfil()
  }

}
