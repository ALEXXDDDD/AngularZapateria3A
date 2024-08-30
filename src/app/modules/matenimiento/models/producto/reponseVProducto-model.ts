export interface ResponseVProducto {
    idProducto: number;
    nombreProd: string | null;
    codigoProd: string | null;
    precioUnitario: number | null;
    stock: number;
    estadoProducto: boolean;
    idUnidad: number;
    fotografia: string | null;
}