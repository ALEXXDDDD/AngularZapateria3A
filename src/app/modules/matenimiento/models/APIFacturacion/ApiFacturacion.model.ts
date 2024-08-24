
//TODO Forma de Pago
export class FormaPago {
    moneda!: string;
    tipo!: string;
  }
//TODO Forma de Pago
  export class Address {
    direccion!: string;
    provincia!: string;
    departamento!: string;
    distrito!: string;
    ubigueo!: string;
  }
//TODO Clase CLiente 
  export class Client {
    tipoDoc!: string;
    numDoc!: number;
    rznSocial!: string;
    address!: Address;
  }
  //TODO Clase Compañia
  export class Company {
    ruc!: number;
    
    razonSocial!: string;
    nombreComercial!: string;
    address!: Address;
  }
  //TODO Clase de la Detalle Producto
  export class Detail {
    codProducto!: string;
    unidad!: string;
    descripcion!: string;
    cantidad!: number;
    mtoValorUnitario!: number;
    mtoValorVenta!: number;
    mtoBaseIgv!: number;
    porcentajeIgv!: number;
    igv!: number;
    tipAfeIgv!: number;
    totalImpuestos!: number;
    mtoPrecioUnitario!: number;
  }
  //TODO Clase para que pinte en la fectura
  export class Legend {
    code!: string;
    value!: string;
  }
  //TODO Clase de lo formal del pago y la empresa
  export class Invoice {
    ublVersion!: string;
    tipoOperacion!: string;
    tipoDoc!: string;
    serie!: string;
    correlativo!: string;
    fechaEmision!: string;
    formaPago!: FormaPago;
    tipoMoneda!: string;
    client!: Client;
    company!: Company;
    mtoOperGravadas!: number;
    mtoIGV!: number;
    valorVenta!: number;
    totalImpuestos!: number;
    subTotal!: number;
    mtoImpVenta!: number;
    details!: Detail[];
    legends!: Legend[];
  }