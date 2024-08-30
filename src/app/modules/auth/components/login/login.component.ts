declare var google: any;
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { RequestLogin } from '../../models/login-request.models';
import { ResponseLogin } from 'src/app/models/login-response.models';
import { ActivatedRoute, Router } from '@angular/router';
import { alert_error, alert_sucess } from 'src/app/funcionts/general.funcionts';
import { LoadStateEnum } from 'src/app/modules/matenimiento/models/core/utils/load-enum';
import { AuthGoogleService } from 'src/app/services/google/auth-goggle-service.service';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLoadSt = LoadStateEnum.None;
  user: SocialUser | null = null;
  loadStateEnum = LoadStateEnum;
  loginForm: FormGroup;
  loginRequest: RequestLogin = new RequestLogin();

  constructor(
    private fb: FormBuilder,
    private oauthService: AuthGoogleService,
    private _authService: AuthService,
    private authService: SocialAuthService,
    private _router: Router,
    private route: ActivatedRoute,
  ) {
    this.loginForm = this.fb.group({
      usuario: [null, [Validators.required]],
      parteViene: ["Sistema", [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  //   google.accounts.id.initialize({
  //     client_id: '818272992678-cacnetaor3df10ftd9ldih4ft588ajnb.apps.googleusercontent.com', // Añade tu Google Client ID aquí
  //     callback: (resp: any) => {
  //       // Manejar la respuesta de Google aquí
  //     }
  //   });

  //   google.accounts.id.renderButton(document.getElementById("google-btn"), {
  //     theme: 'filled_blue',
  //     size: 'large',
  //     shape: 'rectangular',
  //     width: 350
  //   });
  // }
  this.initializeGoogleSignIn();
  }
  private initializeGoogleSignIn(): void {
    (window as any).onload = () => {
      (window as any).google.accounts.id.initialize({
        client_id: "818272992678-sppeetbbh6v781p854ep6a124v45g209.apps.googleusercontent.com",
        callback: this.handleCredentialResponse.bind(this)
      });

      (window as any).google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // atributos de personalización
      );

      (window as any).google.accounts.id.prompt(); // también muestra el diálogo de One Tap
    };
  }

  private handleCredentialResponse(response: any): void {
    console.log("Encoded JWT ID token: " + response.credential);
    // Aquí puedes manejar el token JWT como necesites
  }
  save(name: string, lastName: string) {
    this.frmLoadSt = LoadStateEnum.Loading;

    // Simulación de guardado
    setTimeout(() => {
      alert('Se guardó correctamente');
      this.frmLoadSt = LoadStateEnum.Success;
    }, 4000);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      this.user = user;
      console.log(user);
    }).catch(error => {
      console.error('Error en la autenticación con Google:', error);
    });
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.user = user;
      console.log(user);
    }).catch(error => {
      console.error('Error en la autenticación con Facebook:', error);
    });
  }

  signOut(): void {
    this.authService.signOut().then(() => {
      this.user = null;
    }).catch(error => {
      console.error('Error al cerrar sesión:', error);
    });
  }

  login ()
  {
   
   /*  console.log(this.loginForm.getRawValue()) */
    this.loginRequest = this.loginForm.getRawValue()
    this._authService.login(this.loginRequest).subscribe(
      {
        next: (data:ResponseLogin) => {
          this._router.navigate(['dasboard/mantenimiento/producto'])
          console.log(data) 
          // routeamos al dahboard
          //Alamcenamos el token Valores Del Usuario Ingresadp
          if(data.success)
          {
            alert_sucess("Iniciaste Sesion Correctamente")
            // debugger;
            if(data.nameRol=="Cliente")
              {
                // debugger
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
               
                  this._router.navigate(['dasboard/mantenimiento/inicioSidebar'])
                }
                if(data.nameRol=="Vendedor")
                  {
                    // debugger;
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
