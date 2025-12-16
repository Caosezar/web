import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/layouts/sidebar/sidebar.component';

/**
 * Layout para páginas autenticadas (internas da aplicação)
 *
 * Responsabilidades:
 * - Renderizar conteúdo de páginas internas
 * - Servir como container para componentes de sidebar e menu
 * - Estrutura com sidebar e container principal
 */
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
})
export class AuthLayoutComponent {}
