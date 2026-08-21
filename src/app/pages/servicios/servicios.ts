import { Component, inject } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {

  openService: string | null = null;

  private readonly seo = inject(Seo);

  constructor() {

    this.seo.update({

      title:
        'Servicios de Desarrollo Web y Marketing Digital | Code.Nar',

      description:
        'Conoce los servicios de Code.Nar: desarrollo web, landing pages, tiendas online, sistemas web, marketing digital y soluciones digitales personalizadas para empresas y emprendimientos.',

      canonical: '/servicios',

    });
  }

  toggleService(serviceId: string): void {

    if (this.openService === serviceId) {
      this.openService = null;
    } else {
      this.openService = serviceId;
    }
  }
}