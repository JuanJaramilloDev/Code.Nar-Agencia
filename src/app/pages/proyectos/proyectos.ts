import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Seo } from '../../services/seo';
import { initScrollAnimations } from '../../services/scroll-animations';

interface Proyecto {
  numero: string;
  categoria: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen: string;
  url: string;
  externo: boolean;
}

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

  /** Proyectos por página del paginador interno. */
  readonly proyectosPorPagina = 6;

  readonly paginaActual = signal(1);

  readonly totalPaginas = computed(() =>
    Math.max(1, Math.ceil(this.proyectos.length / this.proyectosPorPagina)),
  );

  /** [1, 2, 3 …] para pintar los botones. */
  readonly paginas = computed(() =>
    Array.from({ length: this.totalPaginas() }, (_, i) => i + 1),
  );

  /** Los 6 proyectos visibles en la página actual. */
  readonly proyectosPagina = computed(() => {
    const inicio = (this.paginaActual() - 1) * this.proyectosPorPagina;
    return this.proyectos.slice(inicio, inicio + this.proyectosPorPagina);
  });

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

  /** Cambia de página y lleva la vista al inicio de la cuadrícula. */
  irAPagina(n: number): void {
    if (n < 1 || n > this.totalPaginas() || n === this.paginaActual()) {
      return;
    }

    this.paginaActual.set(n);

    this.host.nativeElement
      .querySelector('.projects-header')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  readonly proyectos: Proyecto[] = [
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
      imagen: '/images/reyinmobiliaria.webp',
      url: 'https://reyinmobiliaria.net',
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
      imagen: '/images/av21bar.webp',
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
      imagen: '/images/quemini.webp',
      url: 'https://quemini.vercel.app',
      externo: true,
    },

    {
      numero: '04',
      categoria: 'SITIO WEB',
      titulo: 'La Santa Club',
      descripcion:
        'Sitio web diseñado para presentar una carta de bar y sus precios.',
      tecnologias: [
        'Angular',
        'TypeScript',
        'CSS'
      ],
      imagen: '/images/la-santa.webp',
      url: 'https://cartalasantaclub.vercel.app/',
      externo: true,
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
      imagen: '/images/marca-personal.webp',
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
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    // =========================================================
    // PÁGINA 2
    // =========================================================

    {
      numero: '07',
      categoria: 'TIENDA ONLINE',
      titulo: 'Catálogo Digital',
      descripcion:
        'Tienda en línea con catálogo de productos, carrito y gestión de pedidos desde un panel central.',
      tecnologias: ['Angular', 'Supabase', 'TypeScript'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '08',
      categoria: 'LANDING PAGE',
      titulo: 'Landing de Campaña',
      descripcion:
        'Página enfocada en una sola acción: captar contactos para una campaña publicitaria concreta.',
      tecnologias: ['Astro', 'HTML', 'CSS'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '09',
      categoria: 'SISTEMA WEB',
      titulo: 'Panel de Reservas',
      descripcion:
        'Sistema para gestionar reservas, disponibilidad y clientes desde un panel administrativo.',
      tecnologias: ['Angular', 'Laravel', 'MySQL'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '10',
      categoria: 'SITIO WEB',
      titulo: 'Página Institucional',
      descripcion:
        'Sitio corporativo con historia, servicios y contacto, pensado para generar confianza.',
      tecnologias: ['Astro', 'TypeScript', 'CSS'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '11',
      categoria: 'SOLUCIÓN DIGITAL',
      titulo: 'Cotizador en Línea',
      descripcion:
        'Herramienta que calcula precios en tiempo real según las opciones que elige el cliente.',
      tecnologias: ['Angular', 'TypeScript', 'APIs'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '12',
      categoria: 'SITIO WEB',
      titulo: 'Menú QR',
      descripcion:
        'Carta digital accesible por código QR, editable sin tocar el código y optimizada para móvil.',
      tecnologias: ['Angular', 'Supabase', 'CSS'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    // =========================================================
    // PÁGINA 3 
    // =========================================================

    {
      numero: '13',
      categoria: 'APLICACIÓN WEB',
      titulo: 'Panel de Inventario',
      descripcion:
        'Control de stock, entradas y salidas con alertas de mínimos y reportes exportables.',
      tecnologias: ['Angular', 'Laravel', 'MySQL'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '14',
      categoria: 'LANDING PAGE',
      titulo: 'Micrositio de Evento',
      descripcion:
        'Página de un solo scroll con agenda, ponentes y registro para un evento puntual.',
      tecnologias: ['Astro', 'HTML', 'CSS'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '15',
      categoria: 'SISTEMA WEB',
      titulo: 'Sistema de Turnos',
      descripcion:
        'Gestión de citas por área, con recordatorios y vista de calendario para el equipo.',
      tecnologias: ['Angular', 'Supabase', 'TypeScript'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '16',
      categoria: 'SITIO WEB',
      titulo: 'Blog Corporativo',
      descripcion:
        'Sitio de contenidos con categorías, buscador y panel para publicar sin depender de nadie.',
      tecnologias: ['Astro', 'TypeScript', 'CSS'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '17',
      categoria: 'SOLUCIÓN DIGITAL',
      titulo: 'Directorio Local',
      descripcion:
        'Plataforma que agrupa negocios de una zona con fichas, filtros y mapa de ubicación.',
      tecnologias: ['Angular', 'Supabase', 'APIs'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },

    {
      numero: '18',
      categoria: 'LANDING PAGE',
      titulo: 'Portafolio Creativo',
      descripcion:
        'Página visual para mostrar trabajos de un estudio o profesional del sector creativo.',
      tecnologias: ['Astro', 'HTML', 'CSS'],
      imagen: '/images/proyecto-personalizado.webp',
      url: '/contacto',
      externo: false,
    },
  ];
}
