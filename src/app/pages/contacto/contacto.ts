import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { RouterLink } from '@angular/router';

import { Icon } from '../../components/icon/icon';
import { Expandible } from '../../directives/expandible';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Seo } from '../../services/seo';


/**
 * Estado del envío del formulario.
 * 'sending' y 'success' hoy son simulados: no hay backend conectado todavía.
 */
type EstadoEnvio = 'idle' | 'sending' | 'success' | 'error';

/** Nombres de los controles del formulario. */
type CampoContacto =
  | 'nombre'
  | 'email'
  | 'telefono'
  | 'empresa'
  | 'servicio'
  | 'presupuesto'
  | 'mensaje'
  | 'politica';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, Expandible, Icon],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  private readonly seo = inject(Seo);
  private readonly fb = inject(FormBuilder);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly estado = signal<EstadoEnvio>('idle');

  readonly servicios = [
    'Desarrollo Web',
    'Tienda Online',
    'Sistema Web',
    'Soluciones Digitales',
    'Aún no lo tengo claro',
  ];

  readonly presupuestos = [
    'Menos de $2.000.000',
    '$2.000.000 - $5.000.000',
    '$5.000.000 - $10.000.000',
    'Más de $10.000.000',
    'Prefiero conversarlo',
  ];

  readonly faqs = [
    {
      pregunta: '¿Cuánto cuesta una página web?',
      respuesta:
        'Los proyectos parten desde $200.000 (pago único) y los planes mensuales desde $150.000. Pero eso es solo el piso: el precio final depende del alcance, así que lo cerramos contigo después de entender qué necesitas, nunca antes.',
    },
    {
      pregunta: '¿Cuánto tarda el desarrollo?',
      respuesta:
        'Una web corporativa suele tomar de 3 a 5 semanas. Una tienda online, entre 5 y 8. Los sistemas a medida se definen por fases, con entregas parciales para que veas avances desde la primera semana.',
    },
    {
      pregunta: '¿Trabajan con negocios fuera de Nariño?',
      respuesta:
        'Sí. Trabajamos en remoto con clientes de toda Colombia y del exterior. Todo el proceso se lleva por videollamada y mensajería, con entregas documentadas.',
    },
    {
      pregunta: '¿Qué pasa después de entregar el proyecto?',
      respuesta:
        'Incluimos acompañamiento tras la entrega para resolver ajustes y dudas. Si quieres que sigamos manteniendo o evolucionando el proyecto, lo acordamos aparte.',
    },
    {
      pregunta: '¿El sitio queda a mi nombre?',
      respuesta:
        'Sí. El dominio, el hosting y el código quedan a tu nombre. No secuestramos proyectos: si algún día decides irte, te llevas todo.',
    },
  ];

  readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.pattern(/^[0-9+\s()-]{7,20}$/)]],
    empresa: [''],
    servicio: ['', [Validators.required]],
    presupuesto: [''],
    mensaje: ['', [Validators.required, Validators.minLength(20)]],
    politica: [false, [Validators.requiredTrue]],
  });

  constructor() {

    this.seo.update({
      title: 'Contacto | Hablemos de tu proyecto — Code.Nar',
      description:
        'Cuéntanos qué necesitas y te respondemos en menos de 24 horas. Desarrollo web, tiendas online y sistemas a medida en Pasto, Nariño y toda Colombia.',
      canonical: '/contacto',
      extraSchema: [
        {
          '@type': 'FAQPage',
          mainEntity: this.faqs.map((item) => ({
            '@type': 'Question',
            name: item.pregunta,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.respuesta,
            },
          })),
        },
      ],
    });

    // GSAP solo corre en el navegador: afterNextRender no se ejecuta durante el SSR.
    afterNextRender(() => this.initAnimaciones());
  }


  /*
   * =========================================
   * FORMULARIO
   * =========================================
   */

  /** Un control muestra error solo si es inválido y el usuario ya lo tocó. */
  fallo(campo: CampoContacto): boolean {
    const control = this.form.controls[campo];
    return control.invalid && (control.touched || control.dirty);
  }

  async enviar(): Promise<void> {

    if (this.form.invalid) {
      this.form.markAllAsTouched();

      // Lleva el foco al primer campo con error para no dejar al usuario perdido.
      const primerError = this.host.nativeElement
        .querySelector<HTMLElement>('.campo-error-activo input, .campo-error-activo textarea, .campo-error-activo select');

      primerError?.focus();
      return;
    }

    this.estado.set('sending');

    // TODO: reemplazar por la llamada real (Formspree, Web3Forms o endpoint propio).
    // Los datos ya validados están en this.form.getRawValue().
    await new Promise((resolve) => setTimeout(resolve, 1200));

    this.estado.set('success');
    this.form.reset();
  }

  volverAEscribir(): void {
    this.estado.set('idle');
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

          // Con movimiento reducido solo revelamos el contenido, sin desplazamientos.
          if (reducido) {
            gsap.set('.reveal, .hero-contacto-content > *', {
              opacity: 1,
              y: 0,
            });
            return;
          }

          // Entrada del hero.
          gsap.from('.hero-contacto-content > *', {
            opacity: 0,
            y: 30,
            duration: 0.9,
            stagger: 0.09,
            ease: 'power3.out',
          });

          gsap.from('.hero-contacto-glow', {
            opacity: 0,
            scale: 0.8,
            duration: 1.6,
            ease: 'power2.out',
          });

          // Revelado por scroll de cada bloque.
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

          // Parallax suave del halo del hero.
          gsap.to('.hero-contacto-glow', {
            yPercent: 25,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-contacto',
              start: 'top top',
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
