import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { NotFoudComponent } from './pages/not-foud/not-foud.component';
import { WelcomeComponent } from './pages/welcome/welcome.component'
import { AuthInterceptor } from './services/auth.interceptor';
import { WelcomeHeaderComponent } from './pages/welcome/welcome-header/welcome-header.component';
import { SinPermisoComponent } from './pages/sinPermiso/sin-permiso/sin-permiso.component';
import { MantRolRegisterMultipleComponent } from './modules/matenimiento/component/rol/mant-rol-register-multiple/mant-rol-register-multiple.component';
import { ServiceRolComponent } from './service-rol/service-rol.component';
import { CarritoComprasComponent } from './Ventas/component/carrito-compras/carrito-compras.component';
import { ListarDetalleComponent } from './Ventas/component/listar-detalle/listar-detalle.component';

import { ProductoComponent } from './Ventas/component/vistas/producto/producto.component';
import { VistZapatillaComponent } from './Ventas/component/vistas/vist-zapatilla/vist-zapatilla.component';
import { VistModelosComponent } from './Ventas/component/vistas/vist-modelos/vist-modelos.component';
import { VistEmpresaComponent } from './Ventas/component/vistas/vist-empresa/vist-empresa.component';
import { VistContactoComponent } from './Ventas/component/vistas/vist-contacto/vist-contacto.component';
import { VistProductoComponent } from './Ventas/component/vistas/vist-producto/vist-producto.component';
import { VistBailarinaComponent } from './Ventas/component/vistas/mod-bailarinas/vist-bailarina/vist-bailarina.component';
import { VistaZapatoComponent } from './Ventas/component/vistas/vist-zapato/vista-zapato/vista-zapato.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './modules/template/template-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { EnvioDomicilioComponent } from './Ventas/component/vistas/envio-domicilio/envio-domicilio.component';
import { PerfilListComponent } from './pages/perfil/perfil-list/perfil-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    EnvioDomicilioComponent,
    NotFoudComponent,
    VistEmpresaComponent,
    VistContactoComponent,
    ProductoComponent,
    WelcomeComponent,
    WelcomeHeaderComponent,
    VistBailarinaComponent,
    VistZapatillaComponent,
    ListarDetalleComponent,
    CarritoComprasComponent,
    SinPermisoComponent,
    ServiceRolComponent,
    VistaZapatoComponent,
    EnvioDomicilioComponent,
    PerfilListComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    /**
     * TODO: PARA USUAR DOBLE BINDING    
     */
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true} //Configuracion de angular 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
