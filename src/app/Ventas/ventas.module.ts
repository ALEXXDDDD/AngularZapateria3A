import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { VentasRoutingModule } from './ventas-routing.module';
import { ProductoComponent } from './component/vistas/producto/producto.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { WelcomeHeaderComponent } from '../pages/welcome/welcome-header/welcome-header.component';
import { VistBailarinaComponent } from './component/vistas/mod-bailarinas/vist-bailarina/vist-bailarina.component';
import { VistZapatoComponent } from './component/vistas/vist-zapato/vist-zapato.component';
import { VistZapatillaComponent } from './component/vistas/vist-zapatilla/vist-zapatilla.component';
import { VistModelosComponent } from './component/vistas/vist-modelos/vist-modelos.component';
import { VistEmpresaComponent } from './component/vistas/vist-empresa/vist-empresa.component';
import { VistContactoComponent } from './component/vistas/vist-contacto/vist-contacto.component';
import { VistProductoComponent } from './component/vistas/vist-producto/vist-producto.component';


@NgModule({
  declarations: [


  
    VistBailarinaComponent,
         VistZapatoComponent,
         VistZapatillaComponent,
         VistModelosComponent,
         VistEmpresaComponent,
         VistContactoComponent,
         VistProductoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
