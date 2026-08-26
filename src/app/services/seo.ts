import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  /** Bloques de datos estructurados adicionales para esta página (ej. FAQPage). */
  extraSchema?: object[];
}

/** Etiquetas legibles de cada tramo de ruta, para las migas de pan. */
const BREADCRUMB_LABELS: Record<string, string> = {
  servicios: 'Servicios',
  proyectos: 'Proyectos',
  nosotros: 'Nosotros',
  contacto: 'Contacto',
};

@Injectable({
  providedIn: 'root',
})
export class Seo {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Code.Nar';
  private readonly siteUrl = 'https://codenar.net';
  private readonly defaultImage = '/og-image.png';
  private readonly phone = '+57 320 000 0000';
  private readonly email = 'contacto@codenar.net';

  private readonly sameAs = [
    'https://www.instagram.com/CodeNar',
    'https://www.tiktok.com/@CodeNar',
    'https://wa.me/573200000000',
  ];

  update(data: SeoData): void {

    const {
      title,
      description,
      canonical = '/',
      image = this.defaultImage,
      imageAlt = 'Code.Nar — desarrollo web y soluciones digitales en Colombia',
      type = 'website',
      extraSchema = [],
    } = data;

    /*
     * =========================================
     * TITLE
     * =========================================
     */

    this.title.setTitle(title);

    /*
     * =========================================
     * META DESCRIPTION
     * =========================================
     */

    this.meta.updateTag({
      name: 'description',
      content: description,
    });

    /*
     * =========================================
     * ROBOTS
     * =========================================
     */

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    /*
     * =========================================
     * CANONICAL
     * =========================================
     */

    this.setCanonical(canonical);

    /*
     * =========================================
     * OPEN GRAPH
     * =========================================
     */

    this.meta.updateTag({
      property: 'og:type',
      content: type,
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: this.siteName,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: this.getAbsoluteUrl(canonical),
    });

    this.meta.updateTag({
      property: 'og:image',
      content: this.getAbsoluteUrl(image),
    });

    this.meta.updateTag({
      property: 'og:image:width',
      content: '1489',
    });

    this.meta.updateTag({
      property: 'og:image:height',
      content: '776',
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content: imageAlt,
    });

    this.meta.updateTag({
      property: 'og:locale',
      content: 'es_CO',
    });

    /*
     * =========================================
     * TWITTER / X
     * =========================================
     */

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: description,
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: this.getAbsoluteUrl(image),
    });

    this.meta.updateTag({
      name: 'twitter:image:alt',
      content: imageAlt,
    });

    this.setStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': `${this.siteUrl}/#negocio`,
          name: this.siteName,
          image: this.getAbsoluteUrl(this.defaultImage),
          url: this.siteUrl,
          telephone: this.phone,
          email: this.email,
          priceRange: '$$',
          areaServed: 'CO',
          description:
            'Estudio de desarrollo web con sede en Pasto, Nariño: sitios web, tiendas online y sistemas a medida para empresas y emprendimientos en toda Colombia.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pasto',
            addressRegion: 'Nariño',
            addressCountry: 'CO',
          },
          sameAs: this.sameAs,
        },
        {
          '@type': 'WebPage',
          '@id': this.getAbsoluteUrl(canonical),
          name: title,
          description,
          url: this.getAbsoluteUrl(canonical),
          inLanguage: 'es-CO',
          isPartOf: {
            '@id': `${this.siteUrl}/#negocio`,
          },
        },
        this.buildBreadcrumbs(canonical),
        ...extraSchema,
      ],
    });
  }

  /*
   * =========================================
   * MIGAS DE PAN
   * =========================================
   */

  private buildBreadcrumbs(path: string): object {

    const segments = path.split('/').filter(Boolean);

    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: this.siteUrl,
      },
      ...segments.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: BREADCRUMB_LABELS[segment] ?? segment,
        item: `${this.siteUrl}/${segments.slice(0, index + 1).join('/')}`,
      })),
    ];

    return {
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  }

  /*
   * =========================================
   * CANONICAL
   * =========================================
   */

  private setCanonical(path: string): void {

    const head = this.document.head;

    let canonical = head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {

      canonical = this.document.createElement(
        'link'
      );

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      head.appendChild(canonical);
    }

    canonical.setAttribute(
      'href',
      this.getAbsoluteUrl(path)
    );
  }

  /*
   * =========================================
   * URL ABSOLUTA
   * =========================================
   */

  private getAbsoluteUrl(path: string): string {

    if (
      path.startsWith('http://') ||
      path.startsWith('https://')
    ) {
      return path;
    }

    if (!path.startsWith('/')) {
      path = `/${path}`;
    }

    return `${this.siteUrl}${path}`;
  }

  /** Datos estructurados legibles por buscadores, actualizados en cada ruta. */
  private setStructuredData(data: object): void {
    const id = 'codenar-schema';
    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }
}
