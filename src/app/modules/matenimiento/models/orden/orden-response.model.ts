import { ResponseListOrden } from "./orden.request.model";


export class ResponseOrden {
    message: string = "";
    orden: ResponseListOrden[] = [];
}