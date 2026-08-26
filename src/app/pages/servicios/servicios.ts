import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Icon, IconName } from '../../components/icon/icon';
import { Seo } from '../../services/seo';
import { initScrollAnimations } from '../../services/scroll-animations';

interface Servicio {
  id: string;
  numero: string;
  icono: IconName;
  categoria: string;
  titulo: string;
  resumen: string;
  textoDestacado: string;
  texto: string;
  incluyeLabel: string;
  incluye: string[];
  idealPara: string;
  tecLabel: string;
  tecnologias: string[];
  cta: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink, Icon],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  private readonly seo = inject(Seo);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);

  /** Solo un servicio abierto a la vez: evita una página larga y desordenada. */
  openService: string | null = 'desarrollo-web';

  readonly servicios: Servicio[] = [
    {
      id: 'desarrollo-web',
      numero: '01',
      icono: 'code',
      categoria: 'PRESENCIA DIGITAL',
      titulo: 'Desarrollo Web',
      resumen: 'Un sitio profesional que genera confianza y convierte visitas en clientes reales.',
      textoDestacado:
        'Creamos páginas web modernas que representan profesionalmente tu negocio y convierten visitantes en oportunidades.',
      texto:
        'Desde páginas corporativas y sitios informativos hasta proyectos digitales completos, desarrollamos cada proyecto pensando en velocidad, diseño, experiencia de usuario y posicionamiento.',
      incluyeLabel: 'INCLUYE',
      incluye: ['Diseño responsive', 'Optimización móvil', 'SEO técnico básico', 'Formularios', 'Dominio y despliegue'],
      idealPara: 'Empresas, profesionales, emprendimientos, marcas personales y negocios que necesitan una presencia digital profesional.',
      tecLabel: 'TECNOLOGÍAS',
      tecnologias: ['Angular', 'Astro', 'TypeScript', 'HTML', 'CSS'],
      cta: 'Hablemos de tu proyecto',
    },
    {
      id: 'tiendas-online',
      numero: '02',
      icono: 'shopping-bag',
      categoria: 'COMERCIO DIGITAL',
      titulo: 'Tiendas Online',
      resumen: 'Vende en línea 24/7 con una tienda rápida, segura y fácil de gestionar.',
      textoDestacado:
        'Transformamos tus productos en una experiencia de compra digital clara, rápida y profesional.',
      texto:
        'Desarrollamos tiendas online adaptadas a las necesidades de cada negocio, permitiendo gestionar productos, pedidos y clientes desde una plataforma centralizada.',
      incluyeLabel: 'INCLUYE',
      incluye: ['Catálogo de productos', 'Carrito de compras', 'Gestión de pedidos', 'Diseño responsive', 'Integración de pagos'],
      idealPara: 'Comercios, marcas de productos, emprendimientos y negocios que quieren comenzar o fortalecer sus ventas online.',
      tecLabel: 'TECNOLOGÍAS',
      tecnologias: ['Angular', 'TypeScript', 'Supabase', 'APIs'],
      cta: 'Hablemos de tu proyecto',
    },
    {
      id: 'sistemas-web',
      numero: '03',
      icono: 'cpu-chip',
      categoria: 'SOFTWARE A MEDIDA',
      titulo: 'Sistemas Web',
      resumen: 'Automatiza procesos y ahorra horas de trabajo con software construido a tu medida.',
      textoDestacado:
        'Convertimos procesos manuales en herramientas digitales diseñadas específicamente para tu negocio.',
      texto:
        'Desarrollamos sistemas administrativos, plataformas internas, dashboards y aplicaciones web que ayudan a organizar información, automatizar procesos y mejorar la operación.',
      incluyeLabel: 'INCLUYE',
      incluye: ['Paneles administrativos', 'Gestión de usuarios', 'CRUD y bases de datos', 'Dashboards', 'Automatización de procesos'],
      idealPara: 'Empresas que necesitan digitalizar procesos, centralizar información o desarrollar una herramienta específica para su operación.',
      tecLabel: 'TECNOLOGÍAS',
      tecnologias: ['Angular', 'TypeScript', 'Laravel', 'PHP', 'MySQL', 'Supabase'],
      cta: 'Hablemos de tu proyecto',
    },
    {
      id: 'soluciones-digitales',
      numero: '04',
      icono: 'link',
      categoria: 'INTEGRACIÓN Y AUTOMATIZACIÓN',
      titulo: 'Soluciones Digitales',
      resumen: 'Conecta tus herramientas y haz que la tecnología trabaje a favor de tu negocio.',
      textoDestacado:
        'Conectamos herramientas y procesos para que la tecnología trabaje a favor de tu negocio.',
      texto:
        'Diseñamos soluciones específicas para necesidades que no encajan en un producto tradicional: integraciones, automatizaciones, APIs y herramientas digitales personalizadas.',
      incluyeLabel: 'PODEMOS TRABAJAR EN',
      incluye: ['Integraciones con APIs', 'Automatización de tareas', 'Conexión entre plataformas', 'Herramientas internas', 'Soluciones personalizadas'],
      idealPara: 'Negocios con procesos repetitivos, diferentes herramientas que necesitan conectarse o necesidades digitales específicas.',
      tecLabel: 'TECNOLOGÍAS',
      tecnologias: ['APIs', 'Angular', 'Laravel', 'PHP', 'Supabase', 'REST'],
      cta: 'Cuéntanos tu idea',
    },
    {
      id: 'landing-pages',
      numero: '05',
      icono: 'bolt',
      categoria: 'CONVERSIÓN DIGITAL',
      titulo: 'Landing Pages',
      resumen: 'Páginas enfocadas en un solo objetivo: convertir visitantes en clientes.',
      textoDestacado:
        'Creamos landing pages enfocadas en una sola acción: captar clientes, presentar una oferta o convertir visitantes.',
      texto:
        'Diseñamos estructuras claras y estratégicas que combinan copy, diseño, velocidad y llamadas a la acción para que tu página tenga un objetivo concreto.',
      incluyeLabel: 'INCLUYE',
      incluye: ['Diseño orientado a conversión', 'Secciones estratégicas', 'Formularios y CTA', 'Diseño responsive', 'Optimización de velocidad'],
      idealPara: 'Campañas publicitarias, lanzamiento de productos, servicios profesionales, eventos y captación de clientes.',
      tecLabel: 'TECNOLOGÍAS',
      tecnologias: ['Angular', 'Astro', 'HTML', 'CSS', 'TypeScript'],
      cta: 'Diseñemos tu landing',
    },
    {
      id: 'marketing-digital',
      numero: '06',
      icono: 'megaphone',
      categoria: 'CRECIMIENTO Y VISIBILIDAD',
      titulo: 'Marketing Digital',
      resumen: 'Más visibilidad, más alcance y más oportunidades para tu negocio.',
      textoDestacado:
        'Ayudamos a que tu negocio no solo tenga presencia digital, sino que también consiga mayor visibilidad y oportunidades.',
      texto:
        'Podemos trabajar estrategias de contenido, posicionamiento, campañas digitales y optimización de canales para conectar tu negocio con las personas correctas.',
      incluyeLabel: 'PODEMOS TRABAJAR EN',
      incluye: ['Estrategia digital', 'SEO y posicionamiento', 'Contenido para redes', 'Campañas digitales', 'Optimización de conversiones'],
      idealPara: 'Negocios que quieren aumentar su visibilidad, atraer nuevos clientes y fortalecer su presencia digital.',
      tecLabel: 'ÁREAS',
      tecnologias: ['SEO', 'Contenido', 'Redes Sociales', 'Analítica', 'Publicidad'],
      cta: 'Hablemos de crecimiento',
    },
  ];

  constructor() {
    this.seo.update({
      title: 'Servicios de Desarrollo Web y Marketing Digital | Code.Nar',

      description:
        'Conoce los servicios de Code.Nar: desarrollo web, landing pages, tiendas online, sistemas web, marketing digital y soluciones digitales personalizadas para empresas y emprendimientos.',

      canonical: '/servicios',
    });

    // Si llegan desde un enlace con #servicio (ej. /servicios#tiendas-online), lo abrimos directamente.
    // Suscrito (no solo snapshot) porque un enlace de fragmento hacia la misma ruta no vuelve a crear el componente.
    this.route.fragment
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((fragment) => {
        if (fragment && this.servicios.some((servicio) => servicio.id === fragment)) {
          this.openService = fragment;
        }
      });

    afterNextRender(() =>
      initScrollAnimations(this.host, this.destroyRef, '.services-hero')
    );
  }

  toggleService(serviceId: string): void {
    this.openService =
      this.openService === serviceId ? null : serviceId;
  }

  /** Desde el vistazo rápido: abre ese servicio en el acordeón y lo lleva a la vista. */
  irAServicio(serviceId: string): void {
    this.openService = serviceId;

    const target: HTMLElement | null = this.host.nativeElement.querySelector(`#${serviceId}`);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
