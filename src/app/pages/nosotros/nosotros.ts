import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { Expandible } from '../../directives/expandible';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Seo } from '../../services/seo';


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterLink, Expandible],
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
    { valor: '5', etiqueta: 'Fundadores', detalle: 'Un equipo, no una bolsa de freelancers' },
    { valor: '6+', etiqueta: 'Proyectos entregados', detalle: 'De landing pages a sistemas de gestión' },
    { valor: '100%', etiqueta: 'Código propio', detalle: 'Nada de plantillas recicladas' },
    { valor: '24 h', etiqueta: 'Tiempo de respuesta', detalle: 'Días hábiles, sin excepciones' },
  ];

  readonly principios = [
    {
      numero: '01',
      icono: '◆',
      titulo: 'Hablamos claro',
      texto:
        'Nada de tecnicismos para inflar la factura. Explicamos qué hacemos, por qué y cuánto cuesta antes de empezar.',
    },
    {
      numero: '02',
      icono: '◇',
      titulo: 'El proyecto es tuyo',
      texto:
        'Dominio, hosting y código quedan a tu nombre desde el primer día. Si decides irte, te llevas todo sin pedir permiso.',
    },
    {
      numero: '03',
      icono: '✦',
      titulo: 'Construimos a medida',
      texto:
        'Cada negocio opera distinto. Partimos de tu forma de trabajar, no de una plantilla que toca deformar hasta que encaje.',
    },
    {
      numero: '04',
      icono: '◎',
      titulo: 'Hablas con quien desarrolla',
      texto:
        'Sin intermediarios ni gestores de cuenta. La persona que responde tus mensajes es la que escribe el código.',
    },
  ];

  /**
   * Equipo por disciplina.
   * TODO: reemplazar por los nombres y fotos reales de los 5 fundadores.
   */
  readonly equipo = [
    {
      inicial: 'F',
      rol: 'Frontend',
      foco: 'Interfaces y experiencia',
      texto:
        'Traduce el diseño a interfaces rápidas, accesibles y que se sienten bien en cualquier pantalla.',
    },
    {
      inicial: 'B',
      rol: 'Backend',
      foco: 'Datos y lógica',
      texto:
        'Diseña la base de datos, las integraciones y la lógica que sostiene todo lo que no se ve.',
    },
    {
      inicial: 'D',
      rol: 'Diseño',
      foco: 'Identidad e interfaz',
      texto:
        'Define la jerarquía visual, el sistema de color y la tipografía antes de que se escriba una línea de código.',
    },
    {
      inicial: 'P',
      rol: 'Producto',
      foco: 'Alcance y prioridades',
      texto:
        'Convierte lo que el negocio necesita en un alcance concreto, con plazos y entregas verificables.',
    },
    {
      inicial: 'Q',
      rol: 'Calidad',
      foco: 'Pruebas y despliegue',
      texto:
        'Revisa, prueba y despliega. Se asegura de que lo entregado funcione fuera del computador de quien lo hizo.',
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
        'Conoce al equipo detrás de Code.Nar: cinco fundadores que desarrollan páginas web, tiendas online y sistemas a medida para empresas y emprendimientos en Colombia.',
      canonical: '/nosotros',
    });

    // GSAP solo corre en el navegador: afterNextRender no se ejecuta durante el SSR.
    afterNextRender(() => this.initAnimaciones());
  }


  /*
   * =========================================
   * ANIMACIONES
   * =========================================
   */

  private initAnimaciones(): void {

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      mm.add(
        {
          animar: '(prefers-reduced-motion: no-preference)',
          reducido: '(prefers-reduced-motion: reduce)',
        },
        (context) => {

          const { reducido } = context.conditions as { reducido: boolean };

          // Con movimiento reducido mostramos todo, sin desplazamientos.
          if (reducido) {
            gsap.set('.reveal, .hero-nosotros-content > *', {
              opacity: 1,
              y: 0,
            });
            return;
          }

          // Entrada del hero.
          gsap.from('.hero-nosotros-content > *', {
            opacity: 0,
            y: 30,
            duration: 0.9,
            stagger: 0.09,
            ease: 'power3.out',
          });

          gsap.from('.hero-nosotros-glow', {
            opacity: 0,
            scale: 0.8,
            duration: 1.6,
            ease: 'power2.out',
          });

          // Revelado por scroll.
          gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 40,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
            });
          });

          // Las métricas entran en cascada cuando la fila aparece.
          gsap.from('.metrica', {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.metricas',
              start: 'top 85%',
              once: true,
            },
          });

          // Parallax del halo y de la tarjeta del origen.
          gsap.to('.hero-nosotros-glow', {
            yPercent: 25,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-nosotros',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });

          // Se aplica a la tarjeta (hija) y no a .origen-visual, que ya
          // tiene el reveal animando su transform.
          gsap.to('.origen-card', {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: '.origen',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        },
      );

    }, this.host.nativeElement);

    this.destroyRef.onDestroy(() => ctx.revert());
  }
}
