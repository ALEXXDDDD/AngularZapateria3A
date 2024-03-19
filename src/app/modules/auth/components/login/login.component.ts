import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { RequestLogin } from '../../models/login-request.models';
import { ResponseLogin } from 'src/app/models/login-response.models';
import { Router } from '@angular/router';
import { alert_error, alert_sucess } from 'src/app/funcionts/general.funcionts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
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
  

  login ()
  {
   /*  console.log(this.loginForm.getRawValue()) */
    this.loginRequest = this.loginForm.getRawValue()
    this._authService.login(this.loginRequest).subscribe(
      {
        next: (data:ResponseLogin) => {
          console.log(data)
         
          alert_sucess("Iniciaste Sesion Correctamente")
          // routeamos al dahboard
          this._router.navigate(['dasboard'])
          //Alamcenamos el token Valores Del Usuario Ingresadp

          if(data.success)
          {
            debugger;
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("nombrePersona",data.persona.nombrePersona);
            sessionStorage.setItem("idUsuario",data.vwUsuario
            .idUsuario.toString());
            sessionStorage.setItem("usuario",data.vwUsuario
            .usuarioV);
            sessionStorage.setItem("nombreRol",data.vwUsuario
            .nombreRol);
            sessionStorage.setItem("rolId",data.rol.irol.toString());
            
          }
          else{
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
