import { Component, OnInit } from '@angular/core';
import { ResponseProducto } from 'src/app/modules/matenimiento/models/producto/producto-response.model';
import { ResponseVerModelos } from 'src/app/modules/matenimiento/models/VerStore/verModelosResponse.model';
import { VistZapatillasService } from 'src/app/modules/matenimiento/service/vistaZapatillas/vist-zapatillas.service';
import { VistaServiceService } from 'src/app/services/Vista/vista-service.service';

@Component({
  selector: 'app-vist-zapatilla',
  templateUrl: './vist-zapatilla.component.html',
  styleUrls: ['./vist-zapatilla.component.css']
})
export class VistZapatillaComponent implements OnInit {
  responseVerModelos:ResponseVerModelos[]=[]
  responseProducto :ResponseProducto[]=[] 
  constructor(
    private _verZapatillasService:VistZapatillasService,
    private _verZapatilService:VistaServiceService

  )
  {

  }
  ngOnInit(): void {
   
    this.mostarZapatillas("Zapatillas")
  }
  ñostarZapatillas()
  {
    this._verZapatillasService.getAll().subscribe(
      {
        next:(data:ResponseVerModelos[])=>{
          console.log(data)
          this.responseVerModelos=data
        }
      }
    )
  }
  mostarZapatillas(request: string) {
    const body = JSON.stringify(request); //
    this._verZapatilService.nombreModelo(body).subscribe(
      {
        next: (data: ResponseProducto[]) => {
          console.log(data);
          this.responseProducto = data;
        }
      }
    );
  }


}
