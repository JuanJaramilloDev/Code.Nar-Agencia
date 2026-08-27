import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { Icon, IconName } from '../../components/icon/icon';
import { Expandible } from '../../directives/expandible';

import { Seo } from '../../services/seo';
import { initScrollAnimations } from '../../services/scroll-animations';


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterLink, Expandible, Icon],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

  private readonly seo = inject(Seo);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);


  /*
   * =========================================
   * CONTENIDO
   * =========================================
   */

  readonly metricas = [
    { valor: '1', etiqueta: 'Equipo unido', detalle: 'Un grupo, no una bolsa de freelancers' },
    { valor: '8+', etiqueta: 'Proyectos entregados', detalle: 'De landing pages a sistemas de gestión' },
    { valor: '100%', etiqueta: 'Código propio', detalle: 'Nada de plantillas recicladas' },
    { valor: '24 h', etiqueta: 'Tiempo de respuesta', detalle: 'Días hábiles, sin excepciones' },
  ];

  readonly principios: { numero: string; icono: IconName; titulo: string; texto: string }[] = [
    {
      numero: '01',
      icono: 'chat-bubble',
      titulo: 'Hablamos claro',
      texto:
        'Nada de tecnicismos para inflar la factura. Explicamos qué hacemos, por qué y cuánto cuesta antes de empezar.',
    },
    {
      numero: '02',
      icono: 'shield-check',
      titulo: 'El proyecto es tuyo',
      texto:
        'Dominio, hosting y código quedan a tu nombre desde el primer día. Si decides irte, te llevas todo sin pedir permiso.',
    },
    {
      numero: '03',
      icono: 'adjustments',
      titulo: 'Construimos a medida',
      texto:
        'Cada negocio opera distinto. Partimos de tu forma de trabajar, no de una plantilla que toca deformar hasta que encaje.',
    },
    {
      numero: '04',
      icono: 'code',
      titulo: 'Hablas con quien desarrolla',
      texto:
        'Sin intermediarios ni gestores de cuenta. La persona que responde tus mensajes es la que escribe el código.',
    },
  ];

  /**
   * Equipo por disciplina.
   * TODO: reemplazar por los nombres y fotos reales del equipo.
   */
  readonly equipo = [
    {
      inicial: 'F',
      nombre: 'Equipo de Frontend',
      rol: 'Frontend',
      foco: 'Interfaces y experiencia',
      texto:
        'Traduce el diseño a interfaces rápidas, accesibles y que se sienten bien en cualquier pantalla.',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
    },
    {
      inicial: 'B',
      nombre: 'Equipo de Backend',
      rol: 'Backend',
      foco: 'Datos y lógica',
      texto:
        'Diseña la base de datos, las integraciones y la lógica que sostiene todo lo que no se ve.',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
    },
    {
      inicial: 'D',
      nombre: 'Equipo de Diseño',
      rol: 'Diseño',
      foco: 'Identidad e interfaz',
      texto:
        'Define la jerarquía visual, el sistema de color y la tipografía antes de que se escriba una línea de código.',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
    },
    {
      inicial: 'P',
      nombre: 'Equipo de Producto',
      rol: 'Producto',
      foco: 'Alcance y prioridades',
      texto:
        'Convierte lo que el negocio necesita en un alcance concreto, con plazos y entregas verificables.',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
    },
    {
      inicial: 'Q',
      nombre: 'Equipo de Calidad',
      rol: 'Calidad',
      foco: 'Pruebas y despliegue',
      texto:
        'Revisa, prueba y despliega. Se asegura de que lo entregado funcione fuera del computador de quien lo hizo.',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
    },
  ];

  readonly stack = [
    { nombre: 'Angular', tipo: 'Framework' },
    { nombre: 'React', tipo: 'Framework' },
    { nombre: 'Astro', tipo: 'Framework' },
    { nombre: 'TypeScript', tipo: 'Lenguaje' },
    { nombre: 'Supabase', tipo: 'Backend' },
    { nombre: 'Laravel', tipo: 'Backend' },
    { nombre: 'MySQL', tipo: 'Base de datos' },
    { nombre: 'CSS', tipo: 'Estilos' },
  ];


  constructor() {

    this.seo.update({
      title: 'Sobre Code.Nar | Desarrollo Web y Soluciones Digitales',
      description:
        'Conoce al equipo de Code.Nar: especialistas en diseño y desarrollo web, tiendas online y sistemas a medida, con sede en Pasto, Nariño.',
      canonical: '/nosotros',
    });

    // GSAP solo corre en el navegador: afterNextRender no se ejecuta durante el SSR.
    afterNextRender(() =>
      initScrollAnimations(this.host, this.destroyRef, '.hero-nosotros', '.hero-nosotros-glow'),
    );
  }
}
