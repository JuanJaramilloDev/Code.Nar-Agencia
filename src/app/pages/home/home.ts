import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../services/seo';
import { initScrollAnimations } from '../../services/scroll-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private readonly seo = inject(Seo);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {

    this.seo.update({

      title: 'Desarrollo Web en Colombia | Code.Nar',

      description:
        'Code.Nar diseña y desarrolla páginas web, landing pages, tiendas online y soluciones digitales para empresas, emprendimientos y profesionales en Colombia.',

      canonical: '/',

    });

    afterNextRender(() =>
      initScrollAnimations(this.host, this.destroyRef, '.hero', '.visual-glow'),
    );
  }
}
