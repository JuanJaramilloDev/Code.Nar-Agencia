import {
  Component,
  HostListener,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {

  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  /** Menú móvil abierto. */
  readonly menuAbierto = signal(false);

  /** La barra cambia de fondo al bajar del inicio de la página. */
  readonly scrolled = signal(false);

  readonly enlaces = [
    { ruta: '/', texto: 'Inicio', exacto: true },
    { ruta: '/servicios', texto: 'Servicios', exacto: false },
    { ruta: '/proyectos', texto: 'Proyectos', exacto: false },
    { ruta: '/nosotros', texto: 'Nosotros', exacto: false },
  ];

  constructor() {

    // Al navegar, cerramos el menú móvil.
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuAbierto.set(false));

    // Bloquea el scroll del fondo mientras el menú está abierto.
    effect(() => {
      this.document.body.style.overflow = this.menuAbierto() ? 'hidden' : '';
    });

    afterNextRender(() => this.actualizarScroll());
  }

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.cerrarMenu();
  }

  @HostListener('window:scroll')
  actualizarScroll(): void {
    this.scrolled.set(this.document.defaultView!.scrollY > 20);
  }
}
