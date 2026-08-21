import { Component, inject } from '@angular/core';
import { Seo } from '../../services/seo';

@Component({
  imports: [],
  selector: 'app-nosotros',
  standalone: true,
  styleUrl: './nosotros.css',
  templateUrl: './nosotros.html',
})
export class Nosotros {

  private readonly seo = inject(Seo);

  constructor() {

    this.seo.update({

      title:
        'Sobre Code.Nar | Desarrollo Web y Soluciones Digitales',

      description:
        'Conoce Code.Nar, equipo dedicado al desarrollo de páginas web, tiendas online, sistemas web y soluciones digitales para empresas, emprendimientos y profesionales.',

      canonical: '/nosotros',

    });
  }
}