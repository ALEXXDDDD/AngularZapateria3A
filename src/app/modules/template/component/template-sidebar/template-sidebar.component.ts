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
    switch (rolID)
    {
      case "1":
        this.meny =[
          {
            name:"Mantenimiento", target:"TargetMantenimiento",
            subMenu:[
              
                {name:"rol",URL:"matenimiento/rol", incon:"fas fa-card"},
                {name:"empleado",URL:"matenimiento/rol", incon:"fas fa-card"},
                {name:"usuario",URL:"matenimiento/rol", incon:"fas fa-card"},
                {name:"productos",URL:"matenimiento/rol", incon:"fas fa-card"} 
            ]
          },
          {
            name:"Venta", target:"TargetMantenimiento",incon:"fas fa-card",
            subMenu:[
              
                {name:"rol",URL:"matenimiento/rol", incon:"fas fa-crash"},
                {name:"empleado",URL:"matenimiento/rol", incon:"fas fa-users"},
                {name:"usuario",URL:"matenimiento/rol", incon:"fas fa-dashboard"},
                {name:"productos",URL:"matenimiento/rol", incon:"fas fa-card"} 
            ]
          },
          {
            name:"Produccion", target:"TargetMantenimiento",incon:"fas fa-edit",
            subMenu:[
                {name:"empleado",URL:"matenimiento/rol", incon:"fas fa-users"},
                {name:"productos",URL:"matenimiento/rol", incon:"fas fa-card"} 
            ]
          }
        ]
        break;
    }
  }
}
