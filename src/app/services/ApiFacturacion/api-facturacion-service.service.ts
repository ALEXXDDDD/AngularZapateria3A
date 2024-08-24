import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { ResponseApiFacturacion } from 'src/app/modules/matenimiento/models/APIFacturacion/ApiFacturacion-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiFacturacionServiceService  {
  private urlEnncio = "https://facturacion.apisperu.com/api/v1/invoice/send"
  private urlPdf = "https://facturacion.apisperu.com/api/v1/invoice/pdf"

  responseApiFacturacion:ResponseApiFacturacion[]=[]
  

  constructor(private http:HttpClient,private auth:AuthService) { }
  

  loginApiFacturacion(orden: any, serie: string, correlativo: string): void {
    debugger
    const username = "AlexSuarez";
    const password = "123456";
    
    this.auth.loginApi(username, password).subscribe({
      next: (data: ResponseApiFacturacion) => {
        console.log('Login exitoso', data);
        debugger
        if(data.token)
      {

        this.recibirPdf(serie, correlativo, data.token).subscribe({
          next: (pdfBlob: Blob) => {
            this.descargarPdf(pdfBlob, serie, correlativo);
          },
          error: (error) => console.error('Error al obtener el PDF:', error)
        });
        // this.enviarOrden(orden, data.token).subscribe({
        //   next: (response) => {
        //     console.log('Orden enviada con éxito', response);

        //     // Obtener y descargar el PDF
            
        //   },
        //   error: (error) => console.error('Error al enviar la orden:', error)
        // });
      }  // Enviar orden  
      },
      error: (error) => console.error('Error en el login:', error)
    });
  }

  enviarOrden(orden: any, token: string): Observable<ResponseApiFacturacion> {
    debugger
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<ResponseApiFacturacion>(this.urlEnncio, orden, { headers });
  }
  
  recibirPdf(serie: string, correlativo: string, token: string): Observable<Blob> {
    debugger
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const body = { serie, correlativo };

    return this.http.post(this.urlPdf, body, { headers, responseType: 'blob' });
  }

  descargarPdf(pdfBlob: Blob, serie: string, correlativo: string): void {
    debugger
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Boleta_${serie}_${correlativo}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
