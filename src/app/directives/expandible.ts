import {
  Directive,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

import { DOCUMENT } from '@angular/common';


/**
 * Tarjeta que muestra un resumen y despliega el detalle bajo demanda.
 *
 * - Con ratón: el detalle se abre al pasar por encima o al llegar con el
 *   tabulador. Todo eso lo resuelve el CSS; aquí no hace falta nada.
 * - En pantalla táctil: se abre sola al entrar en pantalla y el usuario
 *   puede plegarla. Si la pliega a mano, deja de abrirse sola.
 *
 * Los estilos del patrón (.exp, .exp-detalle, .exp-toggle) están en
 * styles.css para poder reutilizarlos entre componentes.
 *
 * Uso:
 *   <article class="exp" appExpandible #exp="expandible">
 *     ...resumen...
 *     <div class="exp-detalle"><div>...detalle...</div></div>
 *     <button class="exp-toggle" (click)="exp.alternar()"
 *             [attr.aria-expanded]="exp.abierta()">...</button>
 *   </article>
 */
@Directive({
  selector: '[appExpandible]',
  standalone: true,
  exportAs: 'expandible',
  host: {
    '[class.exp-abierta]': 'abierta()',
    '[class.exp-tactil]': 'tactil()',
  },
})
export class Expandible {

  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);

  /** El detalle está desplegado. Solo se usa en táctil. */
  readonly abierta = signal(false);

  /** El dispositivo no tiene puntero fino: mandan el scroll y el toque. */
  readonly tactil = signal(false);

  /** El usuario ya decidió por su cuenta: dejamos de abrirla al desplazar. */
  private intervenido = false;

  constructor() {
    // Nada de esto existe en el servidor: se ejecuta solo en el navegador.
    afterNextRender(() => this.init());
  }


  /** Alterna el detalle y desactiva la apertura automática. */
  alternar(): void {
    this.intervenido = true;
    this.abierta.update((valor) => !valor);
  }


  private init(): void {

    const vista = this.document.defaultView;

    if (!vista?.matchMedia) {
      return;
    }

    const consulta = vista.matchMedia('(hover: none)');

    const aplicar = () => {
      this.tactil.set(consulta.matches);

      // Con ratón el CSS se encarga: el estado abierto sobra.
      if (!consulta.matches) {
        this.abierta.set(false);
      }
    };

    aplicar();

    consulta.addEventListener('change', aplicar);
    this.destroyRef.onDestroy(() => consulta.removeEventListener('change', aplicar));

    this.observarEntrada(vista);
  }


  /** Abre la tarjeta cuando entra en pantalla, salvo que el usuario la haya plegado. */
  private observarEntrada(vista: Window): void {

    if (!('IntersectionObserver' in vista)) {
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {

          if (!entrada.isIntersecting || this.intervenido || !this.tactil()) {
            continue;
          }

          this.abierta.set(true);
        }
      },
      // Se dispara cuando la tarjeta está bien dentro de la pantalla,
      // no apenas asoma por el borde.
      { rootMargin: '-15% 0px -15% 0px', threshold: 0 },
    );

    observador.observe(this.host.nativeElement);
    this.destroyRef.onDestroy(() => observador.disconnect());
  }
}
