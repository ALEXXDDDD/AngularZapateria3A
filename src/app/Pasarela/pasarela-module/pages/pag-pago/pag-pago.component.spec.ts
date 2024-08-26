import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PagPagoComponent } from './pag-pago.component';
import { loadStripe } from '@stripe/stripe-js';

describe('PagPagoComponent', () => {
  let component: PagPagoComponent;
  let fixture: ComponentFixture<PagPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PagPagoComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.paymentForm.valid).toBeFalsy();
  });

  it('should validate card number format', () => {
    let cardNumber = component.paymentForm.controls['cardNumber'];
    cardNumber.setValue('1234-5678-9101-1121');
    expect(cardNumber.valid).toBeTruthy();
  });

  // Añade más pruebas según sea necesario
});
