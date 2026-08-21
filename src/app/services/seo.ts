import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Seo {

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'CodeNar';
  private readonly siteUrl = 'https://codenar.net';
  private readonly defaultImage = '/og-image.jpg';

  update(data: SeoData): void {

    const {
      title,
      description,
      canonical = '/',
      image = this.defaultImage,
      type = 'website',
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
      content: 'index, follow',
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
}