import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Layout para páginas públicas (não autenticadas)
 *
 * Responsabilidades:
 * - Renderizar conteúdo de páginas públicas
 * - Manter estrutura simples sem menu lateral
 */
@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
  standalone: true,
  imports: [RouterOutlet],
})
export class PublicLayoutComponent {}
