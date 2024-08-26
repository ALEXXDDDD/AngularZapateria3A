import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPagoComponent } from './pages/pag-pago/PagPagoComponent';

const routes: Routes = [

  {
    path:'' ,component:PagPagoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasarelaModuleRoutingModule { }
