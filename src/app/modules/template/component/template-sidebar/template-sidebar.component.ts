import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-sidebar',
  templateUrl: './template-sidebar.component.html',
  styleUrls: ['./template-sidebar.component.css']
})
export class TemplateSidebarComponent implements OnInit {
  ngOnInit(): void {
    this.rellenarMenu()
  }


  meny:any[]=[]
  rellenarMenu()
  {
  
    let rolID = sessionStorage.getItem("rolId")
    let nombreRol = sessionStorage.getItem("nombreRol")
    switch (nombreRol)
    {
      
      case "Administrador":
        this.meny =[
        {
          name:"Administracion", target:"TargetMantenimiento",
          subMenu:[
                  
                {name:"Roles de la Empresa ",url:"mantenimiento/rol", incon:"fas fa-card"},
                {name:"Empleados",url:"mantenimiento/empleado", incon:"fas fa-card"},
                {name:"Usuarios",url:"mantenimiento/persona", incon:"fas fa-users"},
                    
                ]
                
              },
              {
                name:"Venta", target:"TargetVenta",incon:"fas fa-users",
                subMenu:[
                  
                    {name:"Lista de Ventas",url:"mantenimiento/rol", incon:"fas fa-users"},
                    {name:"VENTA 2",url:"mantenimiento/rol", incon:"fas fa-users"},
                    {name:"VENTA 3",url:"mantenimiento/rol", incon:"fas fa-dashboard"},
                    {name:"VENTA 4",url:"mantenimiento/rol", incon:"fas fa-users"} 
                ]
              },
              {
                name:"Produccion", target:"TargetProduccion",incon:"fas fa-edit",
                subMenu:[
                    {name:"Materiales",url:"mantenimiento/material", incon:"fas fa-users"},
                    {name:"productos",url:"mantenimiento/producto", incon:"fa-solid fa-bag-shopping"}, 
                    {name:"Modelos de Zapatos ",url:"mantenimiento/modelo", incon:"fa-solid fa-bag-shopping"}
                ]
              }
            ]
      break;
    }
  }
}
