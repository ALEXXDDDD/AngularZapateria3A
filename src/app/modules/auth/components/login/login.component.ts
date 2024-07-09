import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { RequestLogin } from '../../models/login-request.models';
import { ResponseLogin } from 'src/app/models/login-response.models';
import { Router } from '@angular/router';
import { alert_error, alert_sucess } from 'src/app/funcionts/general.funcionts';
import { LoadStateEnum } from 'src/app/modules/matenimiento/models/core/utils/load-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  frmLoadSt = LoadStateEnum.None;
  loadStateEnum = LoadStateEnum;
  loginForm : FormGroup
  loginRequest : RequestLogin = new RequestLogin()
 
  constructor(
    
    private fb: FormBuilder,
    private _authService:AuthService, 
    private _router:Router
  )
  {
    this.loginForm = this.fb.group(
      {
        usuario:[null,[Validators.required]],
        password:[null,[Validators.required]]
      }
    )

  }
  save(name: string, lastName: string) {
    this.frmLoadSt = LoadStateEnum.Loading;

    // envio al servido
    setTimeout(() => {
      // guargador correcto
      alert('Se guardo');
      this.frmLoadSt = LoadStateEnum.Success;
    }, 4000);
  }

  login ()
  {
   
   /*  console.log(this.loginForm.getRawValue()) */
    this.loginRequest = this.loginForm.getRawValue()
    this._authService.login(this.loginRequest).subscribe(
      {
        next: (data:ResponseLogin) => {
          this._router.navigate(['dasboard'])
          console.log(data)
  
          
          // routeamos al dahboard
          
          //Alamcenamos el token Valores Del Usuario Ingresadp

          if(data.success)
          {
            alert_sucess("Iniciaste Sesion Correctamente")
            // debugger;
            if(data.nameRol=="Cliente")
              {
                // debugger;

                this._router.navigate([''])
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("nombrePersona",data.persona.nombrePersona);
                sessionStorage.setItem("idUsuario",data.vwUsuario
                .idUsuario.toString());
                sessionStorage.setItem("usuario",data.vwUsuario.usuario);
                sessionStorage.setItem("nombreRol",data.nameRol);
             
              }
              if(data.nameRol=="Administador")
                {
                  sessionStorage.setItem("token", data.token);
                  sessionStorage.setItem("nombrePersona",data.persona.nombrePersona);
                  sessionStorage.setItem("idUsuario",data.vwUsuario
                  .idUsuario.toString());
                  sessionStorage.setItem("usuario",data.vwUsuario.usuario);
                  sessionStorage.setItem("nombreRol",data.nameRol);
               
                  this._router.navigate(['dasboard'])
                }
                if(data.nameRol=="Vendedor")
                  {
                    // debugger;
                    this._router.navigate(['dasboard'])
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("nombrePersona",data.persona.nombrePersona);
                    sessionStorage.setItem("idUsuario",data.vwUsuario
                    .idUsuario.toString());
                    sessionStorage.setItem("usuario",data.vwUsuario.usuario);
                    sessionStorage.setItem("nombreRol",data.nameRol);
                 
                    this._router.navigate(['dasboard'])
                  }
            // debugger;
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("nombrePersona",data.persona.nombrePersona);
            sessionStorage.setItem("idUsuario",data.vwUsuario
            .idUsuario.toString());
            sessionStorage.setItem("usuario",data.vwUsuario.usuario);
            sessionStorage.setItem("nombreRol",data.nameRol);
         
            
          }
          else{
            alert_error("No existe tu usuario por favor registrese")
            this._router.navigate(['register'])
            return;
          }
        },
        error: (error) => {
          alert_error("Datos Icorrectos")
          this._router.navigate(['login'])
        },
        complete: () => {}
      }
    )

  }
}
