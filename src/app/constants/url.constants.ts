

export const dominio = "https://localhost:7163/"  
/* export const dominio = "https://localhost:7287/"  */
/**
 * TODO: las constantes para llamar al backedn 
 */
export const urlConstants ={
    rol: dominio+'api/Rol/',
    producto:dominio+'api/Producto',
    productoContProduct:dominio+'api/ProductoContProductoler/',
    material:dominio+'api/Material',
    persona: dominio+'api/Persona/',
    Cliente:dominio+'api/Cliente/',
    Empleado:dominio+'api/Empleado/',
    Modelo:dominio+'api/Modelo',
    Unidad:dominio+'api/Unidad',
    auth:dominio + "api/Auth",
    Usuario:dominio + "api/Usuario",
    Proveedor:dominio + "api/Proveedor",
    Orden:dominio + "api/Orden/",
    Produccion:dominio + "api/Produccion/",
    DetalleProduccion:dominio+"api/DetalleProduccion",
    SalidaMaterial:dominio+"api/SalidaMaterial"
}