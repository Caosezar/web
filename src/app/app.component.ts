import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

/**
 * Componente raiz da aplicação
 *
 * Responsabilidades:
 * - Orquestrar o roteamento principal
 * - Gerenciar transição entre layouts públicos e autenticados
 * - Inicializar tema
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'Energest';

  constructor() {
    inject(ThemeService);
  }
}
