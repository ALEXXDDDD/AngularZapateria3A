import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDetalleVistasComponent } from './listar-detalle-vistas.component';

describe('ListarDetalleVistasComponent', () => {
  let component: ListarDetalleVistasComponent;
  let fixture: ComponentFixture<ListarDetalleVistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDetalleVistasComponent]
    });
    fixture = TestBed.createComponent(ListarDetalleVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
