import { DestroyRef, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Animaciones de entrada compartidas para las páginas de contenido.
 * Se limitan al componente que las invoca y respetan la preferencia de movimiento.
 *
 * Hooks disponibles en la plantilla:
 *  - `.hero-reveal`      → revelado tipo imprenta al cargar (barrido vertical).
 *  - `.reveal`           → aparición al entrar en pantalla (una sola vez).
 *  - `[data-parallax]`   → desplazamiento sutil ligado al scroll. El valor del
 *                          atributo es el porcentaje de recorrido (por defecto 12).
 *  - `.hero-gallery`     → se acerca (scale) mientras se recorre el hero y se
 *                          detiene al terminar la sección. Sin pin ni scroll-lock.
 */
export function initScrollAnimations(
  host: ElementRef<HTMLElement>,
  destroyRef: DestroyRef,
  heroSelector: string,
  glowSelector?: string,
): void {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {

      // El hero entra línea por línea, como texto que se imprime.
      // El valor base de clip-path vive en el CSS para que GSAP interpole
      // entre dos "inset" válidos y nunca deje contenido recortado.
      gsap.from(`${heroSelector} .hero-reveal`, {
        clipPath: 'inset(-2% -2% 100% -2%)',
        y: 14,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'clipPath',
      });

      // Cada bloque marcado aparece una vez al alcanzar el borde inferior.
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 38,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        });
      });

      // Parallax mínimo: solo los elementos que lo piden explícitamente.
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const amount = parseFloat(element.dataset['parallax'] || '12');

        gsap.to(element, {
          yPercent: amount,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Compatibilidad: halo del hero que se desplaza con el scroll.
      if (glowSelector) {
        gsap.to(glowSelector, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSelector,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });

    // Galería del hero: se acerca progresivamente mientras se recorre la
    // sección y se detiene justo cuando el hero termina. Usa solo `transform`
    // (scale / translate) sobre un hueco ya reservado a tamaño final, así que
    // nunca queda fija ni invade las secciones siguientes.
    const gallery = host.nativeElement.querySelector('.hero-gallery');

    if (gallery) {
      const galleryTrigger = {
        trigger: heroSelector,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
      } as const;

      mm.add(
        '(prefers-reduced-motion: no-preference) and (min-width: 768px)',
        () => {
          gsap.to('.hero-gallery', {
            scale: 1,
            transformOrigin: 'center top',
            ease: 'none',
            scrollTrigger: { ...galleryTrigger },
          });

          gsap.to('.hg-left', {
            xPercent: -8,
            opacity: 0.62,
            ease: 'none',
            scrollTrigger: { ...galleryTrigger },
          });

          gsap.to('.hg-right', {
            xPercent: 8,
            opacity: 0.62,
            ease: 'none',
            scrollTrigger: { ...galleryTrigger },
          });
        },
      );

      mm.add(
        '(prefers-reduced-motion: no-preference) and (max-width: 767px)',
        () => {
          gsap.to('.hero-gallery', {
            scale: 1,
            transformOrigin: 'center top',
            ease: 'none',
            scrollTrigger: { ...galleryTrigger, scrub: 0.5 },
          });
        },
      );
    }
  }, host.nativeElement);

  destroyRef.onDestroy(() => ctx.revert());
}
