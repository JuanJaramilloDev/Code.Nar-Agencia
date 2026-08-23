import { DestroyRef, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Animaciones de entrada compartidas para las páginas de contenido.
 * Se limitan al componente que las invoca y respetan la preferencia de movimiento.
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
      gsap.from(`${heroSelector} .hero-reveal`, {
        opacity: 0,
        y: 30,
        duration: 0.85,
        stagger: 0.09,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 34,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            once: true,
          },
        });
      });

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
  }, host.nativeElement);

  destroyRef.onDestroy(() => ctx.revert());
}
