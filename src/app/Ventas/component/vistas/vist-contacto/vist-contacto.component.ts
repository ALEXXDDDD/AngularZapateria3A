import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-vist-contacto',
  templateUrl: './vist-contacto.component.html',
  styleUrls: ['./vist-contacto.component.css']
})
export class VistContactoComponent implements AfterViewInit {
  private prevButton!: HTMLButtonElement;
  private nextButton!: HTMLButtonElement;
  private carouselImages!: HTMLElement;
  private images!: NodeListOf<HTMLImageElement>;
  private currentIndex: number = 0;

  ngAfterViewInit(): void {
    // Seleccionar elementos después de que la vista se haya inicializado
    this.prevButton = document.querySelector('.prev') as HTMLButtonElement;
    this.nextButton = document.querySelector('.next') as HTMLButtonElement;
    this.carouselImages = document.querySelector('.carousel-images') as HTMLElement;
    this.images = document.querySelectorAll('.carousel-images img');

    // Configurar event listeners
    this.prevButton.addEventListener('click', () => this.showPrevImage());
    this.nextButton.addEventListener('click', () => this.showNextImage());
  }

  private updateCarousel(): void {
    const offset = -this.currentIndex * 600; // Ajusta según el ancho de las imágenes
    this.carouselImages.style.transform = `translateX(${offset}px)`;
  }

  private showPrevImage(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
    this.updateCarousel();
  }

  private showNextImage(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
    this.updateCarousel();
  }
}
