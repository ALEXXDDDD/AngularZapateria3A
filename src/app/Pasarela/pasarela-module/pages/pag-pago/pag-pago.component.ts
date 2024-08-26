import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment'; // Ajusta la ruta si es necesario
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-pag-pago',
  templateUrl: './pag-pago.component.html',
  styleUrls: ['./pag-pago.component.css']
})
export class PagPagoComponent implements OnInit {
  paymentForm: FormGroup;
  showInfo: boolean = false;
  private stripe: Stripe | null = null;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}-\d{4}-\d{4}$/)]],
      cardName: ['', [Validators.required]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.stripe = await loadStripe(environment.stripePublicKey); 
    } catch (error) {
      console.error('Error al cargar Stripe:', error);
    }
  }

  async processPayment(): Promise<void> {
    if (this.paymentForm.valid) {
      const paymentDetails = this.paymentForm.value;
      console.log('Processing payment with details:', paymentDetails);

      if (this.stripe) {
        try {
          const { token, error } = await this.stripe.createToken('card', {
            number: paymentDetails.cardNumber.replace(/-/g, ''),
            exp_month: parseInt(paymentDetails.expiryDate.split('/')[0], 10),
            exp_year: parseInt(paymentDetails.expiryDate.split('/')[1], 10),
            cvc: paymentDetails.cvv,
            name: paymentDetails.cardName
          });

          if (error) {
            console.error('Error creating token:', error);
          } else if (token) {
            console.log('Token created:', token);
            // Aquí deberías integrar con tu API de pagos real utilizando el token
          }
        } catch (stripeError) {
          console.error('Error during payment process:', stripeError);
        }
      } else {
        console.error('Stripe.js not loaded');
      }
    } else {
      console.log('Formulario inválido');
    }
  }

  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }
}
