import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { Seo } from '../../services/seo';
import { initScrollAnimations } from '../../services/scroll-animations';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

  private readonly seo = inject(Seo);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {

    this.seo.update({

      title:
        'Proyectos de Desarrollo Web | Code.Nar',

      description:
        'Explora los proyectos desarrollados por Code.Nar: páginas web, landing pages, tiendas online, sistemas web y soluciones digitales para empresas y emprendimientos.',

      canonical: '/proyectos',

    });

    afterNextRender(() =>
      initScrollAnimations(this.host, this.destroyRef, '.projects-hero'),
    );
  }

  proyectos = [
    {
      numero: '01',
      categoria: 'SISTEMA WEB',
      titulo: 'Rey Inmobiliaria',
      descripcion:
        'Plataforma web inmobiliaria para mostrar propiedades y facilitar la gestión de inmuebles.',
      tecnologias: [
        'Angular',
        'Supabase',
        'TypeScript'
      ],
      imagen: '/images/reyinmobiliaria.png',
      url: 'https://reyinmobiliaria.com',
      externo: true,
    },

    {
      numero: '02',
      categoria: 'SITIO WEB',
      titulo: 'Avenida 21BAR',
      descripcion:
        'Sitio web diseñado para presentar una carta de bar y sus precios.',
      tecnologias: [
        'React',
        'CSS',
        'Supabase'
      ],
      imagen: '/images/av21bar.png',
      url: 'https://www.av-21bar.com',
      externo: true,
    },

    {
      numero: '03',
      categoria: 'SISTEMA WEB',
      titulo: 'QueMini',
      descripcion:
        'Sistema de gestión para pedidos, órdenes e historial de ventas de un negocio gastronómico.',
      tecnologias: [
        'Angular',
        'TypeScript',
        'LocalStorage'
      ],
      imagen: '/images/quemini.png',
      url: 'https://quemini.vercel.app',
      externo: true,
    },

    {
      numero: '04',
      categoria: 'SITIO WEB',
      titulo: 'Proyecto Corporativo',
      descripcion:
        'Sitio web corporativo enfocado en transmitir confianza y presentar los servicios de una empresa.',
      tecnologias: [
        'Angular',
        'TypeScript',
        'CSS'
      ],
      imagen: '/images/proyecto-corporativo.png',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '05',
      categoria: 'LANDING PAGE',
      titulo: 'Marca Personal',
      descripcion:
        'Página profesional diseñada para presentar experiencia, servicios y proyectos de un profesional.',
      tecnologias: [
        'Astro',
        'HTML',
        'CSS'
      ],
      imagen: '/images/marca-personal.png',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '06',
      categoria: 'SOLUCIÓN DIGITAL',
      titulo: 'Proyecto Personalizado',
      descripcion:
        'Solución digital desarrollada para resolver necesidades específicas de gestión y operación.',
      tecnologias: [
        'Angular',
        'Laravel',
        'MySQL'
      ],
      imagen: '/images/proyecto-personalizado.png',
      url: '/contacto',
      externo: false,
    }
  ];
}
