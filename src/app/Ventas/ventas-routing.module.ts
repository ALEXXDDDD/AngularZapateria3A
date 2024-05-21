import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductoComponent } from './component/vistas/producto/producto.component';

const routes: Routes = [

  {
    path:'lista_productos',component:ProductoComponent //Si es vacio dirigite a este componente

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
