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

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NotFoudComponent,
    WelcomeComponent,
    WelcomeHeaderComponent,
    SinPermisoComponent
  ],
  imports: [
    BrowserModule,
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
