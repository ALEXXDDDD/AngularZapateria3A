import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { NotFoudComponent } from './pages/not-foud/not-foud.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  //Routeo
  {
    path:'',component:WelcomeComponent //Si es vacio dirigite a este componente

  },
  // Utilizacion de Laysi Loding 
  {
    path:'auth',loadChildren:()=>import("./modules/auth/auth.module").then(x=>x.AuthModule) //Si es vacio dirigite a este componente

  },
  {
    path:'dasboard',
    canActivate:[authGuard]
    ,loadChildren:()=>import("./modules/template/template.module").then(x=>x.TemplateModule) //Si es vacio dirigite a este componente

  },
  
  

  {
    path:'prueba',component:PruebaComponent //Si es vacio dirigite a este componente

  },
  {
    path:'404',component:NotFoudComponent //Si es vacio dirigite a este componente
    
  },
  /* {
    path:'**',redirectTo:'/404'
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
