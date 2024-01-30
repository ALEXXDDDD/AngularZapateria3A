
import { ResponsePersona } from "../modules/matenimiento/models/persona/response-persona.model";
import { ResponseRol } from "../modules/matenimiento/models/rol/rol-response.model";
import { ResponseVWUsuario } from "./response-vwUsuario-model";


export class ResponseLogin {
    success: boolean = false;
    mensaje: string ="";
    token: string = "";
    tokenExpira: string ="";
    vwUsuario
: ResponseVWUsuario = new ResponseVWUsuario();
    persona: ResponsePersona = new ResponsePersona () ;
    rol: ResponseRol = new ResponseRol () ;
}