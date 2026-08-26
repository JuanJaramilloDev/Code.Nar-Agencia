import { Component, HostBinding, Input } from '@angular/core';

export type IconName =
  | 'code'
  | 'shopping-bag'
  | 'cpu-chip'
  | 'link'
  | 'bolt'
  | 'megaphone'
  | 'target'
  | 'adjustments'
  | 'chat-bubble'
  | 'sparkles'
  | 'shield-check'
  | 'whatsapp'
  | 'envelope'
  | 'map-pin'
  | 'clock'
  | 'plus'
  | 'x-mark';

/**
 * Set de iconos propio (trazo fino, estilo Heroicons) para evitar
 * depender de una librería externa. Uso: <app-icon name="bolt" />
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  @Input({ required: true }) name!: IconName;

  /** Tamaño en px. Se aplica como estilo inline para no depender del orden de la cascada. */
  @Input() size = 20;

  @HostBinding('style.width.px') get width(): number {
    return this.size;
  }

  @HostBinding('style.height.px') get height(): number {
    return this.size;
  }
}
