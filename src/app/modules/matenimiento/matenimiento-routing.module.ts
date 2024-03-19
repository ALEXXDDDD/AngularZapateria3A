import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantRolListComponent } from './component/rol/mant-rol-list/mant-rol-list.component';
import { MantPersonaListComponent } from './component/persona/mant-persona-list/mant-persona-list.component';
import { MantClienteListComponent } from './component/cliente/mant-cliente-list/mant-cliente-list.component';
import { MantEmpleadoListComponent } from './component/empleado/mant-empleado-list/mant-empleado-list.component';
import { MantModeloListComponent } from './component/modelo/mant-modelo-list/mant-modelo-list.component';
import { MantProductoListComponent } from './component/producto/mant-producto-list/mant-producto-list.component';
import { MantMaterialListComponent } from './component/material/mant-material-list/mant-material-list.component';
import { MantEmplAreaListComponent } from './component/empleado/mant-empl-area-list/mant-empl-area-list.component';
import { MantRolRegisterMultipleComponent } from './component/rol/mant-rol-register-multiple/mant-rol-register-multiple.component';

const routes: Routes = [
  {
    path: 'rol', component:MantRolListComponent
  },
  {
    path: 'rolMultiple', component:MantRolRegisterMultipleComponent
  },
  {
    path: 'persona', component:MantPersonaListComponent
  }
  ,
  {
    path: 'material', component:MantMaterialListComponent
  }
  ,
  {
    path: 'empleado', component:MantEmpleadoListComponent
  },
  {
    path: 'producto', component:MantProductoListComponent
  },
  {
    path: 'cliente', component:MantClienteListComponent
  },
  {
    path: 'modelo', component:MantModeloListComponent
  },
  {
    path: 'empleado-area', component:MantEmplAreaListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatenimientoRoutingModule { }
